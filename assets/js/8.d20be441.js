(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{333:function(s,a,t){"use strict";t.r(a);var n=t(18),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[s._v("#")]),s._v(" Getting started")]),s._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[s._v("#")]),s._v(" Installation")]),s._v(" "),t("h3",{attrs:{id:"nhost"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nhost"}},[s._v("#")]),s._v(" Nhost")]),s._v(" "),t("p",[s._v("The easiest way to deploy HBP is with the official "),t("a",{attrs:{href:"https://nhost.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nhost"),t("OutboundLink")],1),s._v(" managed service. Get your perfect configured backend with PostgreSQL, Hasura and Hasura Backend Plus and save yourself hours of maintenance per month.")]),s._v(" "),t("p",[s._v("All "),t("a",{attrs:{href:"https://nhost.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nhost"),t("OutboundLink")],1),s._v(" projects are built on open source software so you can make realtime web and mobile apps fast 🚀.")]),s._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("a",{attrs:{href:"https://nhost.io/register",target:"_blank"}},[t("img",{attrs:{src:"https://github.com/nhost/hasura-backend-plus/raw/master/assets/nhost-register-button.png",width:"200px"}})])]),s._v(" "),t("h3",{attrs:{id:"docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[s._v("#")]),s._v(" Docker-Compose")]),s._v(" "),t("p",[s._v("Create the following "),t("code",[s._v("docker-compose.yaml")]),s._v(" file, and modify the Hasura Admin Secret in both "),t("code",[s._v("graphql-engine")]),s._v(" and "),t("code",[s._v("hasura-backend-plus")]),s._v(" services.")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.6'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("postgres")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" postgres"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" db_data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/lib/postgresql/data\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("graphql-engine")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hasura/graphql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("engine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("v1.2.1\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'8080:8080'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("depends_on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postgres'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("HASURA_GRAPHQL_DATABASE_URL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" postgres"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//postgres"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("postgrespassword@postgres"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("5432/postgres\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("HASURA_GRAPHQL_ADMIN_SECRET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$HASURA_GRAPHQL_ADMIN_SECRET'")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("HASURA_GRAPHQL_JWT_SECRET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"type": "RS256", "jwk_url": "http://hasura-backend-plus:3000/auth/jwks"}\'')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("HASURA_GRAPHQL_ENABLE_CONSOLE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hasura-backend-plus")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nhost/hasura"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("backend"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("plus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("latest\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3000:3000'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("SERVER_URL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("HASURA_ENDPOINT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//graphql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("engine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8080/v1/graphql\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("HASURA_GRAPHQL_ADMIN_SECRET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$HASURA_GRAPHQL_ADMIN_SECRET'")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("JWT_ALGORITHM")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" RS256\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db_data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("p",[s._v("Then start the services:")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HASURA_GRAPHQL_ADMIN_SECRET")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your Hasura Admin secret"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\ndocker-compose up -d\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("Everything should be up and running. HBP is listening to "),t("code",[s._v("http://localhost:3000")]),s._v(" and Hasura Graphql Engine is listening to "),t("code",[s._v("http://localhost:8080")]),s._v(".")]),s._v(" "),t("p",[s._v("You can then run the Hasura Console in following the "),t("a",{attrs:{href:"https://hasura.io/docs/1.0/graphql/manual/hasura-cli/hasura_console.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("official instructions"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("h3",{attrs:{id:"standalone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#standalone"}},[s._v("#")]),s._v(" Standalone")]),s._v(" "),t("p",[s._v("You can also install HBP without any other service, and connect it to an existing Hasura server, and/or an S3 instance if you plan to use the storage features.\nThe easiest way is to pull and run a Docker container, but you can also run the service from the source code.")]),s._v(" "),t("h4",{attrs:{id:"using-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-docker"}},[s._v("#")]),s._v(" Using Docker")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v(":3000 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HASURA_ENDPOINT=<your Hasura graphql endpoint>"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HASURA_GRAPHQL_ADMIN_SECRET=<your Hasura admin secret>"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"JWT_KEY=<your JWT RSA256 key>"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  nhost/hasura-backend-plus:latest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),s._v(" "),t("h4",{attrs:{id:"from-the-source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#from-the-source-code"}},[s._v("#")]),s._v(" From the source code")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/nhost/hasura-backend-plus.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" hasura-backend-plus\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" .env.example .env\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"registration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registration"}},[s._v("#")]),s._v(" Registration")]),s._v(" "),t("p",[s._v("By default, anyone can register with an email address and a password:")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"email":"real@emailadress.com", "password":"StrongPasswordNot1234"}\'')]),s._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" -X POST http://localhost:3000/auth/register`\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("You can however add some safeguards and limitations to the registration process like email verification, constraints on emails and passwords, or setting additional registration fields from your custom database schema. More information is available in the "),t("RouterLink",{attrs:{to:"/configuration.html#registration"}},[s._v("registration configuration chapter")]),s._v(".")],1),s._v(" "),t("h2",{attrs:{id:"login"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#login"}},[s._v("#")]),s._v(" Login")]),s._v(" "),t("h2",{attrs:{id:"multi-factor-authentication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multi-factor-authentication"}},[s._v("#")]),s._v(" Multi-Factor Authentication")]),s._v(" "),t("h3",{attrs:{id:"generate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate"}},[s._v("#")]),s._v(" Generate")]),s._v(" "),t("h3",{attrs:{id:"enable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable"}},[s._v("#")]),s._v(" Enable")]),s._v(" "),t("h3",{attrs:{id:"login-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#login-2"}},[s._v("#")]),s._v(" Login")]),s._v(" "),t("h3",{attrs:{id:"disable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disable"}},[s._v("#")]),s._v(" Disable")]),s._v(" "),t("h2",{attrs:{id:"jwt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[s._v("#")]),s._v(" JWT")]),s._v(" "),t("h2",{attrs:{id:"enable-an-oauth-provider"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-an-oauth-provider"}},[s._v("#")]),s._v(" Enable an OAuth provider")]),s._v(" "),t("h2",{attrs:{id:"change-email"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-email"}},[s._v("#")]),s._v(" Change email")]),s._v(" "),t("h2",{attrs:{id:"reset-password"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reset-password"}},[s._v("#")]),s._v(" Reset password")]),s._v(" "),t("h2",{attrs:{id:"unregister"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unregister"}},[s._v("#")]),s._v(" Unregister")]),s._v(" "),t("h2",{attrs:{id:"logout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logout"}},[s._v("#")]),s._v(" Logout")])])}),[],!1,null,null,null);a.default=e.exports}}]);