import styles from "@/componentes/inputs/index.module.scss"
import Image from "next/image"





export default function Input(){

    return(
        
        <section className={styles.box}>
            <div className={styles.input1}>
            <label className={styles.label}>Pessimo</label>
            <input className={styles.input}  type="radio" name="icon" onChange={(e) => setName(e.target.value)}  value={1}></input>
            </div>

            <div className={styles.input2}>
            <label className={styles.label}>Ruim</label>
            <input className={styles.input}  type="radio" name="icon" onChange={(e) => setName(e.target.value)}value={2}></input>
            </div>

            <div className={styles.input3}>
            <label className={styles.label}>Bom</label>
            <input className={styles.input}  type="radio" name="icon" onChange={(e) => setName(e.target.value)}value={3}></input>
            </div>

            <div className={styles.input4}>
            <label className={styles.label}>Otimo</label>
            <input className={styles.input}  type="radio" name="icon" onChange={(e) => setName(e.target.value)}value={4}></input>
            </div>

            <div className={styles.input5}>
            <label className={styles.label}>Exelente</label>
            <input className={styles.input}  type="radio" name="icon" onChange={(e) => setName(e.target.value)}value={5}></input>
            </div>
            
            
        </section>

    )
}