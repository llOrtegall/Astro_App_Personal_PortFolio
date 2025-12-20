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

        stage('Up Docker Compose') {
            steps {
                sh '''
                   docker compose up -d
                '''
            }
        }

    }

}
