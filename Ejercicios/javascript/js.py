# Leer el contenido del archivo JavaScript
with open("index.js", "r", encoding="utf-8") as archivo_js:
    contenido_js = archivo_js.read()

# Dividir el contenido en ejercicios individuales
ejercicios = contenido_js.split("\n\n")

# Iterar sobre cada ejercicio y crear un archivo .js para cada uno
for i, ejercicio in enumerate(ejercicios, start=1):
    # Nombre del archivo
    nombre_archivo = f"ejercicio_{i}.js"

    # Escribir el contenido en el archivo
    with open(nombre_archivo, "w", encoding="utf-8") as archivo:
        archivo.write(ejercicio)
    print(f"Archivo '{nombre_archivo}' creado correctamente.")

