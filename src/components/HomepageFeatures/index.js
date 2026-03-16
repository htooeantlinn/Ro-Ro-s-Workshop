import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link'; // 1. Import the Link component

const FeatureList = [
  {
    title: 'Tutorial',
    link: '/docs/intro', // 2. Add the path here
    Svg: require('@site/static/img/svgviewer-output-1.svg').default,
    description: (
      <>
        သပ်ရပ်ပြီး စနစ်ကျတဲ့ Coding ရေးသားနည်းများနှင့် Tutorial များ
      </>
    ),
  },
  {
    title: 'Shop',
    link: '/shop/intro', // 2. Add the path here
    Svg: require('@site/static/img/svgviewer-output-2.svg').default,
    description: (
      <>
        3D Printed ပစ္စည်းများနှင့် Electronic Component ပစ္စည်းများ
      </>
    ),
  },
  {
    title: 'Blog',
    link: '/blog', // 2. Add the path here
    Svg: require('@site/static/img/svgviewer-output-3.svg').default,
    description: (
      <>
        အနာဂတ်ရဲ့ နည်းပညာ အယူအဆသစ်များ
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      {/* Add className={styles.featureLink} to your Links */}
      <Link to={link} className={styles.featureLink}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p style={{color: 'var(--ifm-font-color-base)'}}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}