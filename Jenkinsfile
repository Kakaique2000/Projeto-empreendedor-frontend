// Feito pelo Kaiquinho o mais vitorioso da cidade
node {
    def app
    stage('Checkout') {
        checkout scm
    }
    stage('Build') {
      
        def packageJSON = readJSON file: 'package.json'
        def packageJSONVersion = packageJSON.version
      
        app = docker.build("kakaique2000/front-emprego:" + packageJSONVersion)
    }
    stage('Publish (docker hub)') {
        app.push()
        app.push('latest')
    }
    stage('Publish (production)') {
      
         try {
            sh 'docker stop frontend-emprego'
            sh 'docker rm frontend-emprego'
        } catch(Exception ex) {
         println("nao foi possivel parar o container frontend-emprego: " + ex)
        }
        sh 'docker image prune -f'
        sh 'docker run -d -p 80:80 --name frontend-emprego kakaique2000/front-emprego:latest'
    }
}
