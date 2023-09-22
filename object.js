"use strict"
/**             OBJECT
 * 
 * Declarer un Objet etudiant avec nom , jeu et plat 
 * 
 * Recuperer le nombre de caracteres dans chaques proprietes puis les additionner pour obtenir un nombre 
 * 
 * Si le nombre est pair afficher dans la console "pair"
 * Si le nombre est impair afficher dans la console "impaire"
 * 
 * Plusieurs solutions possibles 
 * Object.keys()=> recuperer les proprieter=s 
 * Object.values() => recuperer les valeurs
 * 
 */
//Premiere exemple 
// let student={
//     name:'Nicolas',
//     favoriteFood:"Salad",
//     city:"Paris",
// }
// let values=Object.values(student);
// console.log(values);
// let resultBis=0;
// values.forEach((values)=> {
//     resultBis+=values.length
// })
// console.log(resultBis);
//exemple 2
let etudiant={
    nom:"Lucas",
    jeu:"Valorant",
    plat:"Kebab",
}
let values=Object.values(etudiant);
let count=values.reduce((acc,value)=>acc+value.length,0)
console.log(count);