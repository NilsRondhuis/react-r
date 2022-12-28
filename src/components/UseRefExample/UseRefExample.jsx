import { useRef } from 'react';
import css from './UseRefExample.module.css';

const UseRefExample = props => {
  const formRef = useRef();

  const scrollToForm = () => {
    const { top } = formRef.current.getBoundingClientRect();
    window.scrollTo({
      behavior: 'smooth',
      top,
    });
    // formRef.current.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    // });
  };

  return (
    <div className={css.box}>
      <div>
        <button type="button" className={css.btn} onClick={scrollToForm}>
          Schedule a cocaching session
        </button>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quis eum et, error cupiditate ducimus blanditiis nulla sed quae iure
          reiciendis possimus nam unde! Libero cum dolore fuga quibusdam
          debitis. Hic, eaque omnis? Repellendus ex sapiente veniam eius.
          Doloribus vel cumque dolorem nesciunt molestias et consectetur?
          Inventore fuga veritatis illo quos reiciendis fugiat quam obcaecati!
          Saepe dolorum delectus deserunt quas? Corporis id ut esse cumque,
          inventore consequuntur voluptatibus quasi, sunt aperiam eius nisi
          alias incidunt ad? Consequatur reiciendis praesentium in ipsum,
          impedit perspiciatis eos deserunt fugiat eum modi suscipit pariatur.
          Deserunt, inventore! Debitis quo, unde, quia, animi in possimus quis
          expedita eligendi cumque amet nesciunt aliquid. Nihil vitae est id
          quibusdam doloribus, nesciunt obcaecati sapiente doloremque qui
          assumenda earum saepe! Provident accusamus sunt voluptas magni fuga?
          Cupiditate tempora maiores laudantium iusto libero autem laborum,
          magni voluptas voluptates dolorum provident amet unde ad ut dolorem
          corrupti animi veniam numquam ex vero? Dolor dolorum odit tempore
          repudiandae blanditiis qui explicabo repellat asperiores. Error
          molestiae cupiditate nihil dolor obcaecati quos harum animi
          blanditiis, hic voluptate expedita quis voluptatibus dolorem inventore
          repellat cum non! Numquam eveniet quaerat nostrum nihil quod
          reprehenderit atque ipsum! Dolorem assumenda officia possimus
          consequatur voluptas iure nemo maxime dolores voluptatum fugit nostrum
          ipsum, doloremque praesentium cum saepe odio excepturi suscipit.
          Labore soluta accusamus rem neque perferendis cum deleniti atque
          dolores, voluptatibus odio pariatur. Velit laboriosam error officia a
          reiciendis animi repellat modi saepe expedita libero atque, nam
          delectus ad at. Quibusdam quisquam, ab quidem perspiciatis impedit,
          laudantium possimus itaque, ad soluta omnis officia saepe cupiditate
          porro culpa earum? Reprehenderit maiores veniam nam repudiandae eos
          quisquam ipsum corporis ab commodi iure? Hic, debitis dolorem. Eum
          explicabo nemo repellat aspernatur. Numquam, doloremque debitis?
          Accusantium nemo enim tempore consequatur aperiam ab veniam libero
          repellendus amet debitis vero, totam similique adipisci iure? Laborum,
          iste.
        </p>
      </div>

      <div>
        <form className={css.form} ref={formRef}>
          <label className={css.label}>
            <input type="text" className={css.input} />
          </label>
          <button type="submit" className={css.btn}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default UseRefExample;
