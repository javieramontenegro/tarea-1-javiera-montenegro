import React from 'react'
import Header from '../../components/header/header'
import Layout from '../../components/layout/layout'
import Cards from '../../components/cards/cards'
import DATA from '../../data/data.json'

class HomePage extends React.Component {
    constructor() {
        super();
        this.state ={
            maxValue:6
        }
    }
  
    render(){
       
        const loadMore = () => {
            this.setState({maxValue:this.state.maxValue + this.state.maxValue })
          }
        return (
            <>
    <Header/>
       <Layout>
            {DATA && DATA.length > 0 && 
            DATA.slice(0,this.state.maxValue).map(({id, ...otherSectionProps})=>(
                <Cards key ={id} {...otherSectionProps}/>
                ))}
             <div className="py-4 px-4 w-full h-full flex justify-center">
                        {this.state.maxValue < DATA.length && (
                          <button className="py-4 w-full h-full text-xl bg-myblue load-btn rounded-lg text-white"  onClick={() => loadMore()}> <p>Cargar mas </p> </button>
                          )}
            </div> 
       </Layout>
    </>
                          
    )
}
}
         


export default HomePage
