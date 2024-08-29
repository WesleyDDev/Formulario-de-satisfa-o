
import styles from '../form/form.module.scss'
import { useState } from 'react';
import emailjs from '@emailjs/browser'

export default function Home() {
    const [name, setName] = useState('')
    const [qualidade, setQualidade] = useState('')
    const [txt, setTxt] = useState('')


    function sendEmail(e){

        e.preventDefault()

        if(name === '' || qualidade === '' || txt === ''){
            alert("Preencha todos os campos")
        }

        const templatesParams = {
            from_name: name,
            from_qualidade: qualidade,
            txt: txt
        }

        emailjs.send("service_670rz4p","template_a3e2x6r",templatesParams,"fBWMXyKgS1C4qzYGE")
    }

   return (
  
  
    <section className={styles.body}>
      <form className={styles.form} onSubmit={sendEmail}  >
          <div className={styles.cxtxt}>
          <label>Cliente/Empresa :</label>
          <input className={styles.cxnome} type="text" placeholder=" Digite Seu Nome" onChange={(e) => setName(e.target.value)} value={name}></input>
          </div>
          <div className={styles.cxtxt}>
          <label>Como foi meu atendimento?</label>
          <input className={styles.cxatendimento} type="text" placeholder=" Digite Aqui"onChange={(e) => setQualidade(e.target.value)} value={qualidade}></input>
          </div>
          
          <div className={styles.cxtxt}>
          <label>Deixe uma observação :</label>
          <textarea className={styles.cxarea} type="text" placeholder=" Digite Aqui"onChange={(e) => setTxt(e.target.value)} value={txt}></textarea>
          </div>
          
            
            <button className={styles.botao} >Enviar</button>
      </form>
    </section>
      
      
      
      
      
      
      
      
      
      
      
      
    );
  }