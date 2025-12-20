pipeline {
    agent any

    tools {
        nodejs 'node-v24'
    }

    stages {

        stage('Install deps') {
            steps {
                sh 'bun install'
            }
        }

        stage('Build') {
            steps {
                sh 'bun run build'
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }

        stage('Down Docker Compose') {
            steps {
                sh '''
                   docker compose -f config/docker-compose.yaml down
                '''
            }
        }

        stage('Up Docker Compose') {
            steps {
                sh '''
                   docker compose -f config/docker-compose.yaml up -d --remove-orphans
                '''
            }
        }

        stage('Validate Curl Response') {
            steps {
                sh '''
                   sleep 10
                   curl -I https://backend-portfolio.lortegal.com
                '''
            }
        }

    }

}
