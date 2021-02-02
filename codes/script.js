window.addEventListener('load', () => document.querySelector('.my-codes').innerHTML = text());

const text = () => {
    return '<section id="java" class="codes">\
    <div><h1>Java</h1>\
    <pre>\n\
    package hello;\n\n\
    public class Hello {\n\
        public static void main(String[] args) {\n\
            System.<i>out</i>.println("Hello, World!");\n\
        }\n\
    }\
    </pre>\
    </div>\
    <div><figure><img src="../images/Codes/java.png" alt="java"></figure></div>\
    </section>\
    <section id="python" class="codes">\
    <div><figure><img src="../images/Codes/python.png" alt="py"></figure></div>\
    <div><h1>Python</h1>\
    <pre>\n\
    if __name__ == \'__main__\':\n\
        print(\'Hello, World!\')\
    </pre>\
    </div>\
    </section>\
    <section id="js-ts" class="codes">\
    <div><h1>JavaScript</h1> <h2 style="margin: 10px 0 0 30px;">TypeScript</h2>\
    <pre>\n\
    <i>console</i>.log(\'Hello, World!\');\
    </pre>\
    </div>\
    <div><figure><img src="../images/Codes/javascript.svg" alt="js-ts"></figure></div>\
    </section>\
    <section id="c" class="codes">\
    <div><figure><img src="../images/Codes/c.png" alt="c"></figure></div>\
    <div><h1>C</h1>\
    <pre>\n\
    #include &#60;stdio.h>\n\n\
    int main()\n\
    {\n\
        <i>printf</i>("Hello, World!");\n\n\
        return 0;\n\
    }\
    </pre>\
    </div>\
    </section>\
    <section id="cpp" class="codes">\
    <div><h1>C++</h1>\
    <pre>\n\
    #include &#60;iostream>\n\n\
    int main()\n\
    {\n\
        std::<i>cout</i> &#60;&#60; "Hello, World!";\n\n\
        return 0;\n\
    }\
    </pre>\
    </div>\
    <div><figure><img src="../images/Codes/cpp.png" alt="cpp"></figure></div>\
    </section>\
    <section id="cs" class="codes">\
    <div><figure><img src="../images/Codes/csharp.png" alt="csharp"></figure></div>\
    <div><h1>C#</h1>\
    <pre>\n\
    using System;\n\n\
    namespace hello {\n\
      class Hello {\n\
        static void Main(string[] args) {\n\
          Console.<i>WriteLine</i>("Hello, World!");\n\
        }\n\
      }\n\
    }\
    </pre>\
    </div>\
    </section>\
    <section id="kotlin" class="codes">\
    <div><h1>Kotlin</h1>\
    <pre>\n\
    package hello\n\n\
    fun main(args : Array&#60;String>) {\n\
        <i>println</i>("Hello, World!")\n\
    }\
    </pre>\
    </div>\
    <div><figure><img src="../images/Codes/kotlin.png" alt="kotlin"></figure></div>\
    </section>\
    <section id="html" class="codes">\
    <div><figure><img src="../images/Codes/html5.png" alt="html5"></figure></div>\
    <div><h1>html</h1>\
    <pre>\n\
    &#60;!doctype html>\n\
    &#60;html>\n\n\
    &#60;head>\n\
        &#60;title>Hello&#60;/title>\n\
    &#60;/head>\n\n\
    &#60;body>\n\
        &#60;h1>Hello, World!&#60;/h1>\n\
    &#60;/body>\n\n\
    &#60;/html>\
    </pre>\
    </div>\
    </section>\
    <section id="php" class="codes">\
    <div><h1>php</h1>\
    <pre>\n\
    &#60;?php \n\
        echo "Hello, World!";\n\
    ?>\
    </pre>\
    </div>\
    <div><figure><img src="../images/Codes/php.png" alt="php"></figure></div>\
    </section>\
    <section id="html-js-css" class="codes desktop">\
    <div><h1>html, JS and css</h1>\
    <pre style="word-wrap: break-word;">\n\
    &#60;!doctype html>\n\
    &#60;html>\n\n\
    &#60;head>\n\
      &#60;title>Hello&#60;/title>\n\n\
      &#60;style>\n\
        body {\n\
          background-color: darkslategrey;\n\
          font-family: \'JetBrains Mono\';\n\
          color: wheat;\n\
          margin-top: 30px;\n\
          margin-left: 50px;\n\
        }\n\
      &#60;/style>\n\n\
      &#60;script>\n\
        window.addEventListener(\'load\', \n\
          () => document.getElementById(\'text\').innerHTML = \'&#60;h1>Hello, World!&#60;/h1>\');\n\
      &#60;/script>\n\
    &#60;/head>\n\n\
    &#60;body>\n\
      &#60;p id="text">&#60;/p>\n\
    &#60;/body>\n\n\
    &#60;/html>\n\
    </pre>\
    </div>\
    <div>\
    <iframe src="hello.html" frameborder="0" width="400" height="200"></iframe>\
    </div>\
    </section>';
}
