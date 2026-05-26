/**
 * ESTUDO DE OPERADORES EM JAVASCRIPT | JAVASCRIPT OPERATORS STUDY
 * * Este script demonstra o uso de operadores fundamentais.
 * This script demonstrates the use of fundamental operators.
 */

// Variáveis de teste | Test variables
const n1 = 10;
const n2 = 5;
const minimo = 7;
const aprovado = true;

// --- OPERADORES ARITMÉTICOS | ARITHMETIC OPERATORS ---
// Usados para cálculos matemáticos | Used for mathematical calculations
console.log('--- Operadores Aritméticos | Arithmetic Operators ---');

console.log("Soma | Addition:", n1 + n2);           
console.log("Subtração | Subtraction:", n1 - n2);      
console.log("Multiplicação | Multiplication:", n1 * n2);  
console.log("Divisão | Division:", n1 / n2);        
console.log("Resto (Módulo) | Remainder (Modulus):", n1 % n2); // Resto da divisão

// --- OPERADORES RELACIONAIS | RELATIONAL OPERATORS ---
// Usados para comparações (Retornam True/False) | Used for comparisons (Return True/False)
console.log('\n--- Operadores Relacionais | Relational Operators ---');

console.log("Igual a | Equal to:", n1 == n2);       
console.log("Diferente de | Not equal to:", n1 != n2);  
console.log("Maior que | Greater than:", n1 > n2);      
console.log("Menor que | Less than:", n1 < n2);      
console.log("Maior ou igual | Greater or equal:", n1 >= n2); 
console.log("Menor ou igual | Less or equal:", n1 <= n2);

// --- OPERADORES LÓGICOS | LOGICAL OPERATORS ---
// Usados para combinar expressões lógicas | Used to combine logical expressions
console.log('\n--- Operadores Lógicos | Logical Operators ---');

// NOT (!): Inverte o valor booleano | Inverts the boolean value
console.log("Negação (NOT) | Negation:", !aprovado);   

// AND (&&): Verdadeiro se AMBAS forem reais | True if BOTH are real
// Ex: Nota maior que 7 E frequência mínima atingida
console.log("Pode passar (AND) | Can pass:", n1 >= 7 && n1 >= minimo); 

// OR (||): Verdadeiro se PELO MENOS UMA for real | True if AT LEAST ONE is real
console.log("Pode passar (OR) | Can pass:", n2 >= 7 || n2 >= minimo);
