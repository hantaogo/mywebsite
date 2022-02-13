import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '关于生活',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        对宇宙充满敬畏，好奇
      </>
    ),
  },
  {
    title: '关于游戏',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        喜欢创造，分享乐趣
      </>
    ),
  },
  {
    title: '关于工作',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        为社会做点贡献吧
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
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
