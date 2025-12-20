pipeline {
    agent any

    options {
        timestamps()
        ansiColor('xterm')
        timeout(time: 30, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10', artifactNumToKeepStr: '5'))
    }

    parameters {
        booleanParam(name: 'FORCE_CLEAN', defaultValue: false, description: 'Force clean build (remove node_modules and dist)')
    }

    tools {
        nodejs 'node-v24'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
                echo "✓ Repository checked out successfully"
            }
        }

        stage('Clean') {
            when {
                expression { params.FORCE_CLEAN == true }
            }
            steps {
                sh '''
                   echo "🧹 Cleaning build artifacts..."
                   rm -rf dist/ node_modules/ .bun/
                   echo "✓ Cleanup completed"
                '''
            }
        }

        stage('Install deps') {
            steps {
                sh '''
                   echo "📦 Installing dependencies with bun..."
                   bun install --frozen-lockfile
                   echo "✓ Dependencies installed"
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                   echo "🔨 Building Astro project..."
                   rm -rf dist/
                   bun run build
                   echo "✓ Build completed successfully"
                '''
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }

        stage('Deploy') {
            parallel {
                stage('Stop Services') {
                    steps {
                        sh '''
                           echo "🛑 Stopping Docker services..."
                           docker compose -f config/docker-compose.yaml down
                           echo "✓ Services stopped"
                        '''
                    }
                }
                
                stage('Start Services') {
                    steps {
                        sh '''
                           echo "🚀 Starting Docker services..."
                           docker compose -f config/docker-compose.yaml up -d --remove-orphans
                           echo "✓ Services started"
                        '''
                    }
                }
            }
        }

        stage('Validate Deployment') {
            steps {
                sh '''
                   echo "✓ Waiting for services to be ready..."
                   sleep 10
                   
                   echo "📊 Docker services status:"
                   docker ps --filter "name=.*portfolio.*" --format "table {{.Names}}\t{{.Status}}"
                   
                   echo "🌐 Validating API response..."
                   curl -I https://backend-portfolio.lortegal.com
                   echo "✓ Deployment validated successfully"
                '''
            }
        }

    }

    post {
        always {
            echo "📋 Pipeline execution completed"
            cleanWs()
        }
        
        success {
            echo "✅ Pipeline succeeded - Portfolio deployed successfully!"
            sh '''
               echo "🎉 Deployment Summary:"
               echo "   - Build artifacts: $(ls -lh dist/index.html 2>/dev/null | awk '{print $5}' || echo 'N/A')"
               docker compose -f config/docker-compose.yaml ps
            '''
        }
        
        failure {
            echo "❌ Pipeline failed - Check logs for details"
            sh '''
               echo "🔍 Docker services status on failure:"
               docker compose -f config/docker-compose.yaml ps
               echo ""
               echo "📋 Recent Docker logs:"
               docker compose -f config/docker-compose.yaml logs --tail=20
            '''
        }
    }

}
