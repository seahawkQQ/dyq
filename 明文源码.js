// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=xxoo&tag=jichang
// 部署完成后在网址后面加上这个，只获取自建节点，/?token=xxoo


const mytoken = 'cd1d960f-9446-499a-a8c9-b21b9fd539e0'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
const tgbottoken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
const tgchatid =''; //可以为空，或者@userinfobot中获取，/start

//自建节点
const MainData = `
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq01.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS01
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq02.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS02
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq03.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS03
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq04.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS04
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq05.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS05
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq06.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS06
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq07.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS07
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq08.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS08
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq09.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS09
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq10.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS10
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq11.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS11
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq12.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS12
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq13.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS13
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq14.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS14
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq15.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS15
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq16.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS16
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq17.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS17
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq18.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS18
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq19.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS19
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sq20.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&alpn=h3&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS20

vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@proxy.xxxxxxxx.tk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS01
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@bestproxy.onecf.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS02
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@ali.055500.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS03
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@cdn-b100.xn--b6gac.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS04
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@cdn.shanggan.pp.ua:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS05
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.shopify.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS06
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.visa.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS07
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@fmkorea.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS08
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@gamer.com.tw:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS09
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@bestcf.onecf.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS10
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.udacity.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS11
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@acsg3.cloudflarest.link:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS12
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.okcupid.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS13
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@cdn.anycast.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS14
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@shuuemura.com.hk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS15
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@acjp2.cloudflarest.link:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS16
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.visa.com.hk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS17
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.zsu.gov.ua:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS18
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.udemy.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS19
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.visa.co.jp:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS20
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@tasteatlas.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS21
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@fbi.gov:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS22
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sabona.co.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS23
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sp.rweek.top:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS24
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.gov.se:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS25
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@edtunnel-dgp.pages.dev:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS26
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@email.lg.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS27
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.csgo.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS28
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@pixiv.net:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS29
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.visa.com.tw:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS30
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@listerine.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS31
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.visa.com.sg:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS32
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.glassdoor.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS33
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@digitaljournal.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS34
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.digitalocean.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS35
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@livescore.co.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS36
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@cfip.xxxxxxxx.tk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS37
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@acquisition.genesis.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS38
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.4chan.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS39
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@cdn.aisere.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS40
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.boba88slot.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS41
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.baipiao.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS42
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@segwangmall.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS43
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@log.bpminecraft.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS44
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@xn--b6gac.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS45
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@suwhc.or.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS46
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@tipu.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS47
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.d-555.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS48
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@comicabc.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS49
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.iakeys.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS50
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@game.freespacefest.hk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS51
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@bachelorstudies.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS52
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@themomstory.co.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS53
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@opencart.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS54
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@acsg.cloudflarest.link:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS55
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@toy-people.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS56
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@steamdb.info:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS57
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@icook.tw:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS58
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@tcafe2a.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS59
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@silkbook.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS60
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@russia.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS61
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.whoer.net:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS62
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.whatismyip.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS63
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@singapore.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS64
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@dnschecker.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS65
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.gco.gov.qa:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS66
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@ip.sb:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS67
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sp.rweek.top:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS68
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@icook.hk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS69
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@cdn-b100.xn--b6gac.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS70
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@time.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS71
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@ns5.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS72
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.udacity.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS73
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.epik.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS74
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@visa.cn:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS75
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@visa.com.tw:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS76
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@gamer.com.tw:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS77
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.epicgames.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS78
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@hcaptcha-assets.ecosec.on.epicgames.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS79
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@radar.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS80
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@staging.cloudflare.tv.cdn.cloudflare.net:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS81
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@cf-imgs.hcaptcha.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS82
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@cloudflare.tv:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS83
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.spaceship.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS84
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@shopify.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS85
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@cloudflare.tv.cdn.cloudflare.net:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS86
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@live.cloudflare.tv.cdn.cloudflare.net:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS87
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.cloudflare.tv.cdn.cloudflare.net:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS88
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@performance.radar.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS89
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@blog.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS90
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.visa.com.hk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS91
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@staging.cloudflare.tv:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS92
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@sso.cloudflare.dev:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS93
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.adultpayperview.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS94
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@dreamsofspanking.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS95
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@isbgpsafeyet.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS96
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.namesilo.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS97
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@gur.gov.ua:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS98
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@log.bpminecraft.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS99
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.fortnite.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS100
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@caribbean.visa.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS101
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@discord.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS102
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@one.dash.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS103
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@pages.dev:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS104
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@qa.visamiddleeast.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS105
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@gates.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS106
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.gov.ua:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS107
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@privacypass.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS108
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@xn--b6gac.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS109
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@arena.lmsys.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS110
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@ppc.land:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS111
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.iakeys.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS112
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@edtunnel-dgp.pages.dev:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS113
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.geolocation.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS114
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.ipget.net:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS115
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.visa.com.sg:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS116
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@ns.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS117
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@abuse.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS118
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@www.d-555.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS119
vless://fe10e368-0ee2-4ab1-b7ec-4407725b138f@ns7.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS120
`

//机场信息，可多个，也可为0
const urls = [
  '',
  ''
  // 添加更多订阅,支持base64
];

addEventListener('fetch', event => { event.respondWith(handleRequest(event.request)) })


async function handleRequest(request) {
    const url = new URL(request.url);
    const tag = url.searchParams.get('tag');
    const token = url.searchParams.get('token'); // Get the token from the URL

    if (token !== mytoken) {
      //await sendMessage("#Token错误信息", request.headers.get('CF-Connecting-IP'), `Invalid Token: ${token}`);
      return new Response('Invalid token???', { status: 403 });
    }
  
    let req_data = "";
    req_data += MainData
    if (tag) {
        switch (tag) {
          case 'jichang':
            const responses = await Promise.all(urls.map(url => fetch(url)));
    
            for (const response of responses) {
              if (response.ok) {
                const content = await response.text();
                req_data += atob(content) + '\n';
              }
            }
            
            break;
    
          default:
            
            break;
      }
    } 
  
    await sendMessage("#访问信息", request.headers.get('CF-Connecting-IP'), `Tag: ${tag}`);
    //修复中文错误
    const utf8Encoder = new TextEncoder();
    const encodedData = utf8Encoder.encode(req_data);
    const base64Data = btoa(String.fromCharCode.apply(null, encodedData));
    return new Response(base64Data);
  }
  


// 代码参考：https://azhuge233.com/cloudflare-workers-%E8%BD%AC%E5%8F%91-telegram-bot-%E6%8E%A8%E9%80%81%E4%BF%A1%E6%81%AF/
async function sendMessage(type, ip, add_data = "") {
  const OPT = {
    BotToken: tgbottoken, // Telegram Bot API
    ChatID: tgchatid, // User 或者 ChatID，电报用户名
  }

  let msg = "";

  const response = await fetch(`http://ip-api.com/json/${ip}`);
  if (response.status == 200) { // 查询 IP 来源信息，使用方法参考：https://ip-api.com/docs/api:json
    const ipInfo = await response.json();
    msg = `${type}\nIP: ${ip}\nCountry: ${ipInfo.country}\nCity: ${ipInfo.city}\n${add_data}`;
  } else {
    msg = `${type}\nIP: ${ip}\n${add_data}`;
  }

  let url = "https://api.telegram.org/";
  url += "bot" + OPT.BotToken + "/sendMessage?";
  url += "chat_id=" + OPT.ChatID + "&";
  url += "text=" + encodeURIComponent(msg);

  return fetch(url, {
    method: 'get',
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;',
      'Accept-Encoding': 'gzip, deflate, br',
      'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
    }
  });
}
