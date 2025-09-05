import React from "react";
import ScrollStack, { ScrollStackItem } from "../../components/scrill-stack/ScrollStack";
import './Scroll.css'
import FastApi from '../../assets/FastAPI.svg';

function ScrollItems () {

    return(
        <ScrollStack>
          <ScrollStackItem
          itemClassName="one_item">
            <h1>Достигнут конец портфолио</h1>
          </ScrollStackItem>
          <ScrollStackItem
          itemClassName="seccond_item">
            <h1>Начало нашего сотрудничества</h1>
          </ScrollStackItem>
          <ScrollStackItem
          itemClassName="tre_item">
            <h2>Тут могла быть ваша реклама</h2>            
          </ScrollStackItem>
        </ScrollStack>
    );
};

export default ScrollItems