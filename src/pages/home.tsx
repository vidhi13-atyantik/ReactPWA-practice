import Button from '@components/button';
import minusimg from '@components/button/images/minus.png';
import minusWhite from '@components/button/images/white-minus.png'
import addimg from '@components/button/images/plus.png';
import styles from './styles.scss';
import rightArrowImg from '@resources/svg-icons/arrow-right.svg'

const HomePage: React.FC = () => (
  <main style={{ padding: '20px' }}>
    <h3 style={{ marginBottom: '20px' }}>Components List</h3>
    <h5 style={{ textAlign: 'center', width: '50%', marginBottom: '20px', textTransform: 'none' }}>BUTTONS ( large )</h5>
    <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <Button element="a" href="/" className='btn-lg'>Button </Button>
      {/* <Button className='btn-lg hover'>Button</Button> */}
      <Button disabled className='btn-lg'>Button</Button>
      <Button className='btn-lg btn-secondary'>Button</Button>
      {/* <Button className='btn-lg secHover'>Button</Button> */}
      <Button disabled className='btn-lg'>Button</Button>
    </div>
    <h5 style={{ textAlign: 'center', width: '50%', marginBottom: '20px', marginTop: '20px', textTransform: 'none' }}>BUTTONS ( medium )</h5>
    <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <Button className='btn-md'>Open</Button>
      {/* <Button className='btn-md hover'>Open</Button> */}
      <Button disabled className='btn-md'>Open</Button>
      <Button className='btn-md btn-secondary'>Open</Button>
      {/* <Button className='btn-md secHover'>Open</Button> */}
      <Button disabled className='btn-md'>Open</Button>
    </div>
    <h5 style={{ textAlign: 'center', width: '50%', marginBottom: '20px', marginTop: '20px', textTransform: 'uppercase' }}>Product buttons</h5>
    <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <div style={{ marginBottom: '15px' }}><Button className='btn-quantity'><img src={minusimg} /></Button> <span className={styles.quantity}> 1 </span><Button className='btn-add'><img src={addimg} /></Button></div>
      <div><Button disabled className='btn-quantity'><img src={minusWhite} /></Button> <span className={styles.quantity}> 0 </span><Button className='btn-add'><img src={addimg} /></Button></div>
      <div><Button className='btn-quantity'><img src={minusimg} /></Button> <span className={styles.quantity}> 20 </span><Button disabled className='btn-add'><img src={addimg} /></Button></div>
      <div><Button disabled className='btn-quantity'><img src={minusWhite} /></Button> <span className={styles.quantity} style={{ color: '#929BA0' }}> 0 </span><Button disabled className='btn-add'><img src={addimg} /></Button></div>
    </div>
    <h5 style={{ textAlign: 'center', width: '50%', marginBottom: '20px', marginTop: '20px', textTransform: 'uppercase' }}>Text, Link, Icon Buttons</h5>
    <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <Button className='btn-link'>Button</Button>
      <Button disabled className='btn-link'>Button</Button>
      <Button className='btn-link btn-link-underline'>Link</Button>
      <Button disabled className='btn-link btn-link-underline'>Link</Button>
      <Button className='btn-link btn-icon'>Button  
      <svg viewBox="0 0 20 12" className={styles.rightArrow}>
        <use xlinkHref={`${rightArrowImg}#img`} />
      </svg>
      </Button>
      <Button disabled className='btn-link btn-icon'>Button  
      <svg viewBox="0 0 20 12" className={styles.rightArrow}>
        <use xlinkHref={`${rightArrowImg}#img`} />
      </svg>
      </Button>
      <Button className='btn-link btn-icon btn-link-secondary'>Button  
      <svg viewBox="0 0 20 12" className={styles.rightArrow}>
        <use xlinkHref={`${rightArrowImg}#img`} />
      </svg>
      </Button>
    </div>
  </main>
);

export default HomePage;
