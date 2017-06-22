# chrome-extension-skeleton
The advanced skeleton for Chrome Extension. All works are automated

## Usage
In order to build your extension you only need to run following command

<code>npm run build</code>

This will generate all extension files including **manifest.json**, **extension key** and your final packed extension **.crx**

## Structure
The structure of the project is quite complicated but easy to develop. All source files are located under <code>src</code> folder

 * [src](./src)
   * [template](./src/templates) - <code> all html templates </code>
        * [content](./src/templates/content)
        * [background](./src/templates/background) 
        * [devtools](./src/templates/devtools) 
   * [scripts](./src/scripts)    - <code> all javascript codes  </code>
        * [content](./src/scripts/content)
        * [background](./src/scripts/background) 
        * [devtools](./src/scripts/devtools) 
   * [style](./src/style)        - <code> all css files</code>
   * [static](./src/static)      - <code> static files  </code>
   * [img](./src/img)            - <code> images </code>
   
   This script based structure helps to control over the development process.
   
   ## Instal
   
   In order to develop your chrome extension with this skeleton you only need to clone the project and work in it
   
   <code>git clone https://github.com/doniyor2109/chrome-extension-skeleton.git </code>
