import React from 'react';
import Combobox from 'react-widgets/lib/Combobox'



class Calc extends React.Component{
    
    let widgets = (
        <Combobox
        data={[
            '一次関数',
            '二次関数'
        ]}
        />

    function select(){
        switch(widgets){
            case '一次関数':
                <LinearFunction/>
            break;
            
            case '二次関数':
                <QuadraticFunction/>
            break;
        }
    }

    render(){

        );
    
 
        return(
                widgets
                function();
        );
    }
}

class LinearFunction extends React.Component{

    render(){
        return(
            <dev>
                itizikannsuu
            </dev>
        );
    }

}

class QuadraticFunction extends React.Component{

    render(){
        return(
            <dev>
                nizikannsuu
            </dev>
        );
    }
}

export default Calc;