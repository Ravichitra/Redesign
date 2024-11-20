import styles from '../page.module.css';
export default function Homepage()
{
    return(
        <section >
        <div className={styles.gradtop}></div>
        <div className={styles.gradbottom}></div>
        <div className="container text-center">
  <div className="row">

    <div className="col align-self-center">
    <div className="row ">
      <h2 className={styles.homeheads}>Search Engine Optimization </h2>
      <h1 className={styles.homeheads}> Want to rank your website SERP's #1</h1>
      <h3 className={styles.homeheads}> Since 2008,Zammy Zaif has been one of leading Google SEO Expert. Our primary objective is achieving 1st rank result in Google</h3>
    </div></div>
    <div className="col">
    <div className="row align-items-start">  <div className={styles.cards} >  <h2 className={styles.homeheads}>Social Media Optimization </h2>
      <h1 className={styles.homeheads}> Optimize your Rank in <span><b>Google SERP</b></span></h1>
      <h3 className={styles.homeheads}> Social Media Optimization, an off-page SEO strategy, can enhance both your website's traffic and domain authority, subsequently improving your Google ranking.
									</h3></div></div><div className="row align-items-start" >
    <div className={styles.cards}><h2 className={styles.homeheads}>Social Media Optimization </h2>
      <h1 className={styles.homeheads}> Optimize your Rank in <span><b>Google SERP</b></span></h1>
      <h3 className={styles.homeheads}> Social Media Optimization, an off-page SEO strategy, can enhance both your website's traffic and domain authority, subsequently improving your Google ranking.
									</h3></div></div>
    </div>
    
  </div>
</div></section>
    )
}