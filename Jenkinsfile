pipeline {

    agent any

    stages {

        stage("build") {

            steps {
                echo 'building the application...' 

                script {
                    def msg = 2 + 2 > 3 ? "yes" : "no"
                    echo msg
                }
            }
        }

        stage("test") {

            steps {
                echo 'testing the application...'
            }
        }

        stage("deploy") {

            steps {
                echo 'deploying the application...'
            }
        }
    }
}