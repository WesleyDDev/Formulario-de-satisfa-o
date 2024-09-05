
import Image from 'next/image';
import Link from 'next/link';


import styles from '../form/form.module.scss'
import { useState } from 'react';
import emailjs from '@emailjs/browser'
import Input from "@/componentes/inputs/index.jsx"

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


        function trocarTela(e){
          if(btn === true){
            alert(funcionando)
          }
        }
    }

   return (
  <main>
    
    <section className={styles.body}>
      <section className={styles.apre}>
      <h1>Olá</h1>
      <h3>Bem vindo ao formulario de satisfação</h3>
      <p>Gostaria de saber de voce oque achou do meu trabalho!</p>
      <p>Responda esse formulario para me ajudar a desenvolver minhas habilidades</p>
      <h4>Conto com você!</h4>
      

      </section>
      <form className={styles.form} id='2' onSubmit={sendEmail}  >
          <div className={styles.cxtxt}>


          <label>Atendimento no prazo:</label>
            
          <section className={styles.box}>
            <div className={styles.input1}>
            <label className={styles.label}>Pessimo</label>
            <input className={styles.input}  type="radio" name="21" onChange={(e) => setName(e.target.value)}  value={"Péssimo"}></input>
            </div>

            <div className={styles.input2}>
            <label className={styles.label}>Ruim</label>
            <input className={styles.input}  type="radio" name="21" onChange={(e) => setName(e.target.value)}value={"Ruim"}></input>
            </div>

            <div className={styles.input3}>
            <label className={styles.label}>Bom</label>
            <input className={styles.input}  type="radio" name="21" onChange={(e) => setName(e.target.value)}value={"Bom"}></input>
            </div>

            <div className={styles.input4}>
            <label className={styles.label}>Otimo</label>
            <input className={styles.input}  type="radio" name="21" onChange={(e) => setName(e.target.value)}value={"Otímo"}></input>
            </div>

            <div className={styles.input5}>
            <label className={styles.label}>Exelente</label>
            <input className={styles.input}  type="radio" name="21" onChange={(e) => setName(e.target.value)}value={"Exelente"}></input>
            </div>
            
        </section>
        
          <div className={styles.cxtxt}>

          <label>Qualidade dos entregaveis?</label>
          <section className={styles.box}>
            <div className={styles.input1}>
            <label className={styles.label}>Pessimo</label>
            <input className={styles.input}  type="radio" name="ic" onChange={(e) => setQualidade(e.target.value)}  value={"Péssimo"}></input>
            </div>

            <div className={styles.input2}>
            <label className={styles.label}>Ruim</label>
            <input className={styles.input}  type="radio" name="ic" onChange={(e) => setQualidade(e.target.value)}value={2}></input>
            </div>

            <div className={styles.input3}>
            <label className={styles.label}>Bom</label>
            <input className={styles.input}  type="radio" name="ic" onChange={(e) => setQualidade(e.target.value)}value={"Bom"}></input>
            </div>

            <div className={styles.input4}>
            <label className={styles.label}>Otimo</label>
            <input className={styles.input}  type="radio" name="ic" onChange={(e) => setQualidade(e.target.value)}value={"Otímo"}></input>
            </div>

            <div className={styles.input5}>
            <label className={styles.label}>Exelente</label>
            <input className={styles.input}  type="radio" name="icon" onChange={(e) => setQualidade(e.target.value)}value={"Exelente"}></input>
            </div>
            
            
        </section>

         

          </div>
          
          <div className={styles.cxtxt}>
          <label>Comunicação:</label>
          <section className={styles.box}>
            <div className={styles.input1}>
            <label className={styles.label}>Pessimo</label>
            <input className={styles.input}  type="radio" name="icon" onChange={(e) => setComunicacao(e.target.value)}  value={"Péssimo"}></input>
            </div>

            <div className={styles.input2}>
            <label className={styles.label}>Ruim</label>
            <input className={styles.input}  type="radio" name="icon" onChange={(e) => setComunicacao(e.target.value)}value={2}></input>
            </div>

            <div className={styles.input3}>
            <label className={styles.label}>Bom</label>
            <input className={styles.input}  type="radio" name="icon" onChange={(e) => setComunicacao(e.target.value)}value={"Bom"}></input>
            </div>

            <div className={styles.input4}>
            <label className={styles.label}>Otimo</label>
            <input className={styles.input}  type="radio" name="icon" onChange={(e) => setComunicacao(e.target.value)}value={"Otímo"}></input>
            </div>

            <div className={styles.input5}>
            <label className={styles.label}>Exelente</label>
            <input className={styles.input}  type="radio" name="icon" onChange={(e) => setComunicacao(e.target.value)}value={"Exelente"}></input>
            </div>
            
            
        </section>
          </div>

          <div className={styles.cxtxt}>
            <label>Expectativas:</label>
          <section className={styles.box}>
            <div className={styles.input1}>
            <label className={styles.label}>Pessimo</label>
            <input className={styles.input}  type="radio" name="ico" onChange={(e) => setExp(e.target.value)}  value={"Péssimo"}></input>
            </div>

            <div className={styles.input2}>
            <label className={styles.label}>Ruim</label>
            <input className={styles.input}  type="radio" name="ico" onChange={(e) => setExp(e.target.value)}value={"Ruim"}></input>
            </div>

            <div className={styles.input3}>
            <label className={styles.label}>Bom</label>
            <input className={styles.input}  type="radio" name="ico" onChange={(e) => setExp(e.target.value)}value={"Bom"}></input>
            </div>

            <div className={styles.input4}>
            <label className={styles.label}>Otimo</label>
            <input className={styles.input}  type="radio" name="ico" onChange={(e) => setExp(e.target.value)}value={"Otímo"}></input>
            </div>

            <div className={styles.input5}>
            <label className={styles.label}>Exelente</label>
            <input className={styles.input}  type="radio" name="ico" onChange={(e) => setExp(e.target.value)}value={"Exelente"}></input>
            </div>
            
            
        </section>

          </div>

          
          
          <div className={styles.cxtxt}>
          <label>Elogio/Critica/Sugestão:</label>
          <textarea className={styles.cxarea} type="text" placeholder=" Digite Aqui"onChange={(e) => setTxt(e.target.value)} value={txt}></textarea>
          </div>
          
            
            <button className={styles.botao} >Enviar</button>
            </div>
      </form>
    </section>
      
      
      
      
    
    </main>   
      
      
      
      
      
      
    );
  }