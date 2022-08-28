import { TodoList } from '@components/todo/list';
import { TodoAdd } from '@components/todo/add';
import Button from '@components/button';
import minusimg from '@components/button/images/minus.png';
import minusWhite from '@components/button/images/white-minus.png'
import addimg from '@components/button/images/plus.png';
import styles from './styles.scss'

const HomePage: React.FC = () => (
  <main style={{padding:'20px'}}>
    <h3 style={{marginBottom:'20px'}}>Components List</h3>
    <h5 style={{textAlign:'center',width:'50%',marginBottom:'20px',textTransform:'none'}}>BUTTONS ( large )</h5>
    <div style={{display:'flex',width:'50%', justifyContent:'space-between',flexWrap:'wrap'}}>
    <Button className='btn-lg'>Button</Button>
    <Button className='btn-lg hover'>Button</Button>
    <Button disabled className='btn-lg'>Button</Button>
    <Button className='btn-lg secondary-btn'>Button</Button>
    <Button className='btn-lg secHover'>Button</Button>
    <Button disabled className='btn-lg'>Button</Button>
    </div>
    <h5 style={{textAlign:'center',width:'50%',marginBottom:'20px', marginTop:'20px',textTransform:'none'}}>BUTTONS ( medium )</h5>
    <div style={{display:'flex',width:'50%', justifyContent:'space-between',flexWrap:'wrap'}}>
    <Button className='btn-md'>Open</Button>
    <Button className='btn-md hover'>Open</Button>
    <Button disabled className='btn-md'>Open</Button>
    <Button className='btn-md secondary-btn'>Open</Button>
    <Button className='btn-md secHover'>Open</Button>
    <Button disabled className='btn-md'>Open</Button>
    </div>
    <h5 style={{textAlign:'center',width:'50%',marginBottom:'20px', marginTop:'20px',textTransform:'uppercase'}}>Product buttons</h5>
    <div style={{display:'flex',width:'50%', justifyContent:'space-between',flexWrap:'wrap'}}>
    <div style={{marginBottom:'15px'}}><Button className='prod-btn minus-btn'><img src={minusimg}/></Button> <span className={styles.quantity}> 1 </span><Button className='add-btn'><img src={addimg}/></Button></div>
    <div><Button disabled className='prod-btn minus-btn'><img src={minusWhite}/></Button> <span className={styles.quantity}> 0 </span><Button className='add-btn'><img src={addimg}/></Button></div>
    <div><Button className='prod-btn minus-btn'><img src={minusimg}/></Button> <span className={styles.quantity}> 20 </span><Button disabled className='add-btn'><img src={addimg}/></Button></div>
    <div><Button disabled className='prod-btn minus-btn'><img src={minusWhite}/></Button> <span className={styles.quantity} style={{color:'#929BA0'}}> 0 </span><Button disabled className='add-btn'><img src={addimg}/></Button></div>
    </div>
  </main>
);

export default HomePage;
