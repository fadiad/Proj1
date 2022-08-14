import React, { Component } from 'react'
import NavBar from './NavBar'
import '../Style/Activities.css'



export class Activities extends Component {
    constructor(props) {
        super(props);
        this.state = {
       
        };
 
      }
    
      _onButtonClickSum() {
      
        window.open('https://www.belarabyapps.com/%D8%A7%D8%B9%D9%85%D8%A7%D9%84-%D9%8A%D8%AF%D9%88%D9%8A%D8%A9-%D9%84%D9%84%D8%B5%D9%8A%D9%81/')
      }
      _onButtonClickSp() {
        window.open('https://www.belarabyapps.com/%D8%A7%D9%84%D8%B9%D8%A7%D8%A8-%D8%AA%D8%B9%D9%84%D9%8A%D9%85%D9%8A%D8%A9-%D8%B9%D9%86-%D8%A7%D9%84%D8%B1%D8%A8%D9%8A%D8%B9/')

      }
      _onButtonClickWin() {
        window.open('https://tarbiazakia.com/46852/2017/12/16-%D9%81%D9%83%D8%B1%D8%A9-%D8%B1%D8%A7%D8%A6%D8%B9%D8%A9-%D9%84%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0-%D9%85%D8%B9-%D8%A7%D9%84%D8%A3%D9%88%D9%84%D8%A7%D8%AF-%D9%84%D9%84%D8%A7%D8%AD%D8%AA%D9%81%D8%A7/amp/')

      }
      _onButtonClickAut() {
        window.open('')

      }

      _onButtonClickColors(){
        window.open('https://www.pinterest.com/pin/567805465494247864')
      }

    render() {
        return (
            <div>
                <NavBar />
                <div className='Se-cards'>
                <label >فعاليةالفصول الاربعة</label>
                </div>
                
                <div className='seasons'>
                    
                <div className="card" id='summer' onClick={this._onButtonClickSum}>
                    <img className="card-img-top" src={""} />
                        <div className="card-body">
                            <h5 className="card-title">فصل الصيف</h5>
                        </div>
    
                </div>

                <div className="card" id='winter' onClick={this._onButtonClickWin}>
                    <img className="card-img-top" src="" />
                        <div className="card-body">
                            <h5 className="card-title">فصل الشتاء</h5>
                           
                        </div>

                </div>

                <div className="card" id='spring' onClick={this._onButtonClickSp} >
                    <img className="card-img-top" src="" />
                        <div className="card-body">
                            <h5 className="card-title">فصل الربيع</h5>
                        </div>
       
                </div>

                <div className="card" id='autumn' onClick={this._onButtonClickAut} >
                    <img className="card-img-top"  />
                        <div className="card-body">
                            <h5 className="card-title">فصل الخريف</h5>
                        </div>
                </div>
   
                </div>

                <div className='Colors'>
                <div className='Colors-cards'>
                <label >فعالية الالوان </label>
                </div>
                <div className="card" id='Colors' onClick={this._onButtonClickColors} >
                    <img className="card-img-top"  />
                        <div className="card-body">
                            <h5 className="card-title">ألوان</h5>
                        </div>
                </div>

                </div>
            </div>
        )
    }
}

export default Activities