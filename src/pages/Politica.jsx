import '../styles/Politica.css'
import {
  Accordion,
  Container
} from "react-bootstrap";
const Politica = () => {
  return (
    <>
      <>
        <main className={"container1"}>
          <Container fluid>
            <h1>Politica de Privacidade</h1>
            <hr />
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Introdução</Accordion.Header>
                <Accordion.Body> Bem-vindo(a) ao Minha Biblioteca Pessoal. Valorizamos a sua privacidade e estamos comprometidos em proteger suas informações pessoais. Esta Política de Privacidade descreve como coletamos, usamos, divulgamos e protegemos suas informações quando você usa nosso site. </Accordion.Body>
              </Accordion.Item>
              <br />
              <Accordion.Item eventKey="1">
                <Accordion.Header>Informações que Coletamos</Accordion.Header>
                <Accordion.Body>
                  <strong> Informações Pessoais:</strong> Podemos coletar informações que identificam você pessoalmente, como nome, endereço de e-mail e outras informações de contato quando você se registra em nossa plataforma.
                  <br />
                  <strong> Informações de Uso:</strong> Coletamos informações sobre como você utiliza nosso site, incluindo as páginas que visita, o tempo que passa nelas e outras atividades realizadas.
                  <br />
                  <strong>  Informações de Dispositivo:</strong> Coletamos informações sobre o dispositivo que você usa para acessar nosso site, como o modelo do dispositivo, sistema operacional, navegador e endereço IP.
                </Accordion.Body>
              </Accordion.Item>
              <br />
              <Accordion.Item eventKey='2'>
                <Accordion.Header>Uso das Informações</Accordion.Header>
                <Accordion.Body>
                  Usamos as informações que coletamos para: <br />

                  <strong>Fornecer e Melhorar Nossos Serviços:</strong> Utilizamos suas informações para operar e melhorar a experiência do usuário em nossa plataforma. <br />
                  <strong>Personalizar a Experiência do Usuário:</strong> Podemos usar suas informações para personalizar o conteúdo e as recomendações de leitura. <br />
                  <strong>Comunicação:</strong> Enviar notificações importantes, atualizações e promoções, desde que você tenha optado por recebê-las. <br />
                  <strong>Segurança:</strong> Proteger a segurança de nossos usuários e prevenir fraudes e abusos.
                </Accordion.Body>
              </Accordion.Item>
              <br />
              <Accordion.Item eventKey='3'>
                <Accordion.Header>Compartilhamento de Informações</Accordion.Header>
                <Accordion.Body>
                  Não compartilhamos suas informações pessoais com terceiros, exceto nas seguintes circunstâncias: <br />

                  <strong>Com o Seu Consentimento:</strong> Podemos compartilhar informações com terceiros se tivermos o seu consentimento para fazê-lo. <br />
                  <strong>Para Cumprir a Lei:</strong> Podemos divulgar informações se acreditarmos que isso é necessário para cumprir uma obrigação legal ou para proteger nossos direitos, segurança e propriedade.

                </Accordion.Body>

              </Accordion.Item>
              <br />
              <Accordion.Item eventKey='4'>
                <Accordion.Header>Segurança das Informações</Accordion.Header>
                <Accordion.Body>
                  Implementamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum sistema de segurança é infalível, e não podemos garantir a segurança absoluta de suas informações.
                </Accordion.Body>
              </Accordion.Item>
              <br />
              <Accordion.Item eventKey='5'>
                <Accordion.Header>Seus Direitos</Accordion.Header>
                <Accordion.Body>
                  Você tem o direito de acessar, corrigir, atualizar ou excluir suas informações pessoais. Para exercer esses direitos, entre em contato conosco através do e-mail fornecido em nosso site.
                </Accordion.Body>
              </Accordion.Item>
              <br />
              <Accordion.Item eventKey='6'>
                <Accordion.Header>Alterações a Esta Política de Privacidade</Accordion.Header>
                <Accordion.Body>
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer mudanças publicando a nova política em nosso site. Recomendamos que você revise esta política regularmente para se manter informado sobre como protegemos suas informações.
                </Accordion.Body>
              </Accordion.Item>
              <br />
              <Accordion.Item eventKey='7'>
                <Accordion.Header>Contato</Accordion.Header>
                <Accordion.Body>
                  Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade, entre em contato conosco através do nosso e-mail de suporte: suporte@minhabibliotecapessoal.com.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>

        </main>
      </>



    </>
  )
}

export default Politica