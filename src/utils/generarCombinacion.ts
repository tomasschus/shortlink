export function generarCombinacion(): string {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let combinacion = '';

  for (let i = 0; i < 5; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    combinacion += caracteres[indice];
  }

  return combinacion;
}
