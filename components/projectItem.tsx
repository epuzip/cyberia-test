

import Image from "next/image";
import styles from '@/styles/projectitem.module.css';


const ProjectItem = (props:any) => {
    const {id, title, img, description} = props;
    
    return (
        <div key={id} className={styles.container_item}>
            <h3 className={styles.title}>{title}</h3>
            <Image className={styles.image}
                src={img} 
                alt='ProjectImage' 
                width={300} 
                height={300} 
            />
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export { ProjectItem } ;
