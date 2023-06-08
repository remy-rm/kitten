import { Injectable } from "@angular/core";
import { Kitten } from "src/app/models/kitten.model";


@Injectable({
    providedIn: 'root'
})

export class KittenService {

    kitten : Kitten[]= [
        new Kitten(
            'Grattouille',
            3,
            'Chat de gouttière',
            './assets/gratouille.jpg'
        ),
        new Kitten(
            'titin',
            1.5,
            'Chat de gouttière',
            './assets/tintin.jpg'
        ),
        new Kitten(
            'nebulla',
            2,
            'Chat de gouttière',
            './assets/nebula.jpg'
        )
        
    ]

    kittenUser : Kitten[] =[]

    public getKitten(){
        return this.kitten
    }

    public setKittenUser(kitten:Kitten) {
        console.log(kitten)
        this.kittenUser.push(kitten)
    }
    public getKittenUser(){
        return this.kittenUser
    }
    public getKittenByName(nameId:string):Kitten {
        const kitten = this.kitten.find(oneKitten =>oneKitten.name === nameId )
        const kittenUser = this.kittenUser.find(oneKitten => oneKitten.name === nameId)
    	
        if(!kitten && !kittenUser){
            throw new Error('kitten not found')
        }else if(kitten){
            return kitten!
        }else{
            return kittenUser!
        }

    }

}