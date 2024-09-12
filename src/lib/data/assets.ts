import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';
import { base } from '$app/paths';

const gh = (file: string) => `${base}/logos/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

const Assets = {
	AWS: a('aws.svg'),
	Bootstrap: a('bootstrap.svg'),
	C: a('c.svg'),
	Cpp: a('cpp.svg'),
	Celery: a('celery.svg'),
	Django: a('django.svg'),
	FastApi: a('fastapi'),
	Flask: a('flask.svg'),
	Go: a('go.svg'),
	Kafka: a('kafka.svg'),
	Neo4j: a('neo4j.svg'),
	Nginx: a('nginx.svg'),
	Numpy: a('numpy.svg'),
	Pandas: a('pandas.svg'),
	RabbitMQ: a('rabbitmq.svg'),
	Rust: a('rust.svg', 'rust-dark.png'),
	Scrapy: a('scrapy.png'),
	Selenium: a('selenium.svg'),
	Docker: a('docker.svg'),
	Kubernetes: a('kubernetees.svg'),
	Csharp: a('csharp.svg'),
	Xamarin: a('xamarin.svg'),
	TypeScript: a('ts.png'),
	VueJs: a('vue.png'),
	ReactJs: a('react.svg'),
	Dart: a('dart.png'),
	Kotlin: a('kotlin.png'),
	Python: a('python.png'),
	NodeJs: a('node.png'),
	Deno: a('deno.png', 'deno-dark.png'),
	Svelte: a('svelte.png'),
	ExpressJs: a('express.png'),
	JavaScript: a('js.png'),
	Fastify: a('fastify.svg', 'fastify-dark.png'),
	NestJs: a('nest.svg'),
	Quasar: a('quasar.svg'),
	SolidJs: a('solid.svg'),
	Electron: a('electron.png'),
	Flutter: a('flutter.svg'),
	Java: a('java.png'),
	AdonisJs: a('adonis.png'),
	Android: a('android.png'),
	Angular: a('angular.png'),
	PostgreSQL: a('postgres.png'),
	Firebase: a('firebase.png'),
	Sass: a('sass.png'),
	Unknown: a('no-img.svg'),
	MongoDB: a('mongodb.svg'),
	Redis: a('redis.svg'),
	Tailwind: a('tailwind.svg'),
	HTML: a('html.svg'),
	Premiere: a('premiere.svg'),
	Photoshop: a('photoshop.svg'),
	CSS: a('css.svg'),
	AfterEffects: a('after-effects.svg'),
	Illustrator: a('illustrator.svg'),
	Nuxt: a('nuxt.png'),
	Vite: a('vite.png'),
	Vitest: a('vitest.svg'),
	Jest: a('jest.png'),
	Unocss: a('unocss.svg'),
	Ruvy: a('ruvy.svg'),
	Postcss: a('postcss.svg'),
	Geeks: a('4GeeksAcademy.jpg'),
	JaimeIsaza: a('jaimeIsaza.jpeg'),
	Mui: a('mui.png'),
	Dotnet: a('dotnet.png'),
	Revature: a('revature.png'),
	Remotasks: a('remotasks.png'),
	Mysql: a('mysql.png'),
	AzureDevops: a('azureDevops.png'),
	Javalin: a('javalin.png'),
	Kalygo: a('kalygo.jpeg'),
	RC: a('rclogo.png'),
	NextJs: a('nextjs.png'),
	Stagewood: a('stagewood.png'),
	WordPress: a('wordpress.png'),
	AMtrust: a('amtrust.png'),
	Portfolio: a('portfolio.png'),
	GigHive: a('gighive.png'),
	RealEstate: a('realestate.png'),
	Figma: a('figma.jpeg'),
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
