import classes from './hero.module.css';

import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/my_profile.jpeg"
                    alt="My Profile Image"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I`m JeongBo</h1>
            <p>I`m studying Next.js !</p>
        </section>
    );
};

export default Hero;
