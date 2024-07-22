import '../styles/Sobre.css'
import {
  Accordion,
  Container
} from "react-bootstrap";

const Sobre = () => {
  return (
    
    <main className='sobre-container'>
            <section className="container1">
                <Container fluid>
                    <h1 className='mt-3 text-center'>Sobre</h1>
                    <hr/>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Sobre nós</Accordion.Header>
                            <Accordion.Body> Bem-vindo(a) ao <strong>Biblioteca Pessoal</strong>! Somos apaixonados por livros e criamos esta aplicação para ajudar pessoas como você a organizar e gerenciar suas coleções de livros de forma prática e intuitiva. </Accordion.Body>
                        </Accordion.Item>
                        <br/>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Nossa Missão</Accordion.Header>
                            <Accordion.Body>
                            Nossa missão com o <strong>Biblioteca Pessoal</strong> é proporcionar uma ferramenta que facilite a vida dos leitores e colecionadores de livros. Queremos ajudar você a manter seu acervo em ordem, encontrar informações sobre seus livros rapidamente e compartilhar suas leituras com amigos e familiares.
                            </Accordion.Body>
                        </Accordion.Item>
                        <br/>
                        <Accordion.Item eventKey='2'>
                          <Accordion.Header>Nossa História</Accordion.Header>
                          <Accordion.Body>
                            Desde a infância, sempre fomos fascinados por livros. Seja mergulhando em romances épicos, aprendendo com biografias inspiradoras ou explorando o vasto mundo do conhecimento através de obras de não-ficção, os livros sempre foram uma parte essencial de nossas vidas. Com o passar dos anos, nossa coleção de livros cresceu, e percebemos a necessidade de uma maneira eficiente de organizá-la. Unimos o útil ao agradável e transformamos um trabalho exigido em um curso em um aplicativo para gestão de coleções de livros.
                          </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                   
                    
                </Container>

            </section>
    </main>
  )
}

export default Sobre
