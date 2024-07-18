import '../styles/Sobre.css'
import {
  Accordion,
  Container
} from "react-bootstrap";

const Sobre = () => {
  return (
    
    <>
            <main className={"container1"}>
                <Container fluid>
                    <h1>Sobre</h1>
                    <hr/>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Sobre mim</Accordion.Header>
                            <Accordion.Body> Bem-vindo(a) ao Minha Biblioteca Pessoal! Sou um(a) apaixonado(a) por livros e criei esta aplicação para ajudar pessoas como você a organizar e gerenciar suas coleções de livros de forma prática e intuitiva. </Accordion.Body>
                        </Accordion.Item>
                        <br/>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Nossa Missão</Accordion.Header>
                            <Accordion.Body>
                            Minha missão com o Minha Biblioteca Pessoal é proporcionar uma ferramenta que facilite a vida dos leitores e colecionadores de livros. Quero ajudar você a manter seu acervo em ordem, encontrar informações sobre seus livros rapidamente e compartilhar suas leituras com amigos e familiares.
                            </Accordion.Body>
                        </Accordion.Item>
                        <br/>
                        <Accordion.Item eventKey='2'>
                          <Accordion.Header>Minha História</Accordion.Header>
                          <Accordion.Body>
                          Desde criança, sempre fui fascinado(a) por livros. Seja mergulhando em romances épicos, aprendendo com biografias inspiradoras ou explorando o vasto mundo do conhecimento através de obras de não-ficção, os livros sempre foram uma parte essencial da minha vida. Com o passar dos anos, minha coleção de livros cresceu e percebi a necessidade de uma maneira eficiente de organizá-la.
                          </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                   
                    
                </Container>

            </main>
    </>
  )
}

export default Sobre
