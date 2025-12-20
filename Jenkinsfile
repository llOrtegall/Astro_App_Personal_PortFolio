pipeline {
    agent any

    tools {
        nodejs 'node-v24'
    }

    parameters {
        string(name: 'DOCKER_NETWORK', defaultValue: 'ortega-net', description: 'Red Docker externa para Nginx')
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

        stage('Docker Network') {
            steps {
                sh '''
                    if ! docker network inspect ${DOCKER_NETWORK} >/dev/null 2>&1; then
                      docker network create ${DOCKER_NETWORK}
                    fi
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    export DOCKER_NETWORK=${DOCKER_NETWORK}
                    docker compose -f config/docker-compose.yaml down || true
                    docker compose -f config/docker-compose.yaml up -d --remove-orphans
                    docker compose -f config/docker-compose.yaml ps
                '''
            }
        }
    }

    post {
        always {
            sh 'docker compose -f config/docker-compose.yaml ps || true'
        }
    }
}
