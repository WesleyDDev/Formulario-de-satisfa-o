
import Image from 'next/image';
import styles from '../form/form.module.scss'
import { useState } from 'react';
import emailjs from '@emailjs/browser'

export default function Home() {
    const [name, setName] = useState('')
    const [qualidade, setQualidade] = useState('')
    const [comunicacao, setComunicacao] = useState('')
    const[exp, setExp] = useState('')
    const [txt, setTxt] = useState('')


    function sendEmail(e){

        e.preventDefault()

        if(name === '' || qualidade === '' || txt === '' || comunicacao ===''|| exp ===''){
            alert("Preencha todos os campos")
        }

        const templatesParams = {
            from_name: name,
            from_qualidade: qualidade,
            from_comunicacao: comunicacao,
            from_exp:exp,
            txt: txt
        }

        emailjs.send("service_670rz4p","template_a3e2x6r",templatesParams,"fBWMXyKgS1C4qzYGE")
    }

   return (
  <main>
    <div className={styles.fundo}>
    <section className={styles.body}>
      <form className={styles.form} onSubmit={sendEmail}  >
          <div className={styles.cxtxt}>

          <label>Atendimento no prazo :</label>
          <input className={styles.cxnome} type="text" placeholder=" Digite Aqui" onChange={(e) => setName(e.target.value)} value={name}></input>
          <div className={styles.cxtxt}>

          <label>Qualidade dos entregaveis?</label>
          <input className={styles.cxatendimento} type="text" placeholder=" Digite Aqui"onChange={(e) => setQualidade(e.target.value)} value={qualidade}></input>
          </div>
          
          <div className={styles.cxtxt}>
          <label>Comunicação</label>
          <input className={styles.cxcomunicacao} type="text" placeholder=" Digite Aqui"onChange={(e) => setComunicacao(e.target.value)} value={comunicacao}></input>
          </div>
          <div className={styles.cxtxt}>
          <label>Expectativas atendidas:</label>
          <input className={styles.cxexp} type="text" placeholder=" Digite Aqui"onChange={(e) => setExp(e.target.value)} value={exp}></input>
          </div>
          
          <div className={styles.cxtxt}>
          <label>Elogio/Critica/Sugestão :</label>
          <textarea className={styles.cxarea} type="text" placeholder=" Digite Aqui"onChange={(e) => setTxt(e.target.value)} value={txt}></textarea>
          </div>
          
            
            <button className={styles.botao} >Enviar</button>
            </div>
      </form>
    </section>
      
      
      
      
    </div>
    </main>   
      
      
      
      
      
      
    );
  }