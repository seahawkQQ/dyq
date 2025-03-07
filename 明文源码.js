// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=xxoo&tag=jichang
// 部署完成后在网址后面加上这个，只获取自建节点，/?token=xxoo


const mytoken = 'f150f32a-2995-49e1-ab2a-d9278f74aaea'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
const tgbottoken ='6501178601:AAF2F5RYMjwM7DaEHF7SYvjrPZipk43xmfo'; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
const tgchatid ='1028572195'; //可以为空，或者@userinfobot中获取，/start

//自建节点
const MainData = `
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq01.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS01
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq02.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS02
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq03.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS03
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq04.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS04
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq05.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS05
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq06.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS06
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq07.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS07
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq08.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS08
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq09.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS09
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq10.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS10
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq11.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS11
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq12.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS12
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq13.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS13
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq14.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS14
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq15.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS15
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq16.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS16
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq17.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS17
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq18.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS18
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq19.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS19
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sq20.660085.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-CFIPauto-HTTPS20

vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@proxy.xxxxxxxx.tk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS01
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@bestproxy.onecf.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS02
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@ali.055500.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS03
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@cdn-b100.xn--b6gac.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS04
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@cdn.shanggan.pp.ua:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS05
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.shopify.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS06
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.visa.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS07
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@fmkorea.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS08
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@gamer.com.tw:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS09
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@bestcf.onecf.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS10
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.udacity.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS11
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@acsg3.cloudflarest.link:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS12
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.okcupid.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS13
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@cdn.anycast.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS14
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@shuuemura.com.hk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS15
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@acjp2.cloudflarest.link:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS16
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.visa.com.hk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS17
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.zsu.gov.ua:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS18
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.udemy.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS19
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.visa.co.jp:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS20
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@tasteatlas.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS21
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@fbi.gov:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS22
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sabona.co.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS23
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sp.rweek.top:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS24
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.gov.se:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS25
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@edtunnel-dgp.pages.dev:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS26
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@email.lg.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS27
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.csgo.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS28
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@pixiv.net:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS29
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.visa.com.tw:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS30
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@listerine.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS31
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.visa.com.sg:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS32
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.glassdoor.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS33
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@digitaljournal.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS34
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.digitalocean.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS35
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@livescore.co.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS36
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@cfip.xxxxxxxx.tk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS37
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@acquisition.genesis.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS38
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.4chan.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS39
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@cdn.aisere.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS40
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.boba88slot.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS41
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.baipiao.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS42
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@segwangmall.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS43
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@log.bpminecraft.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS44
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@xn--b6gac.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS45
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@suwhc.or.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS46
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@tipu.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS47
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.d-555.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS48
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@comicabc.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS49
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.iakeys.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS50
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@game.freespacefest.hk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS51
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@bachelorstudies.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS52
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@themomstory.co.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS53
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@opencart.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS54
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@acsg.cloudflarest.link:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS55
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@toy-people.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS56
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@steamdb.info:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS57
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@icook.tw:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS58
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@tcafe2a.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS59
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@silkbook.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS60
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@russia.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS61
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.whoer.net:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS62
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.whatismyip.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS63
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@singapore.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS64
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@dnschecker.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS65
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.gco.gov.qa:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS66
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@ip.sb:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS67
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sp.rweek.top:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS68
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@icook.hk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS69
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@cdn-b100.xn--b6gac.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS70
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@time.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS71
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@ns5.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS72
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.udacity.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS73
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.epik.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS74
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@visa.cn:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS75
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@visa.com.tw:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS76
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@gamer.com.tw:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS77
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.epicgames.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS78
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@hcaptcha-assets.ecosec.on.epicgames.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS79
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@radar.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS80
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@staging.cloudflare.tv.cdn.cloudflare.net:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS81
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@cf-imgs.hcaptcha.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS82
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@cloudflare.tv:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS83
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.spaceship.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS84
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@shopify.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS85
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@cloudflare.tv.cdn.cloudflare.net:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS86
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@live.cloudflare.tv.cdn.cloudflare.net:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS87
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.cloudflare.tv.cdn.cloudflare.net:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS88
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@performance.radar.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS89
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@blog.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS90
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.visa.com.hk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS91
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@staging.cloudflare.tv:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS92
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@sso.cloudflare.dev:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS93
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.adultpayperview.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS94
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@dreamsofspanking.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS95
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@isbgpsafeyet.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS96
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.namesilo.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS97
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@gur.gov.ua:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS98
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@log.bpminecraft.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS99
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.fortnite.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS100
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@caribbean.visa.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS101
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@discord.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS102
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@one.dash.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS103
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@pages.dev:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS104
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@qa.visamiddleeast.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS105
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@gates.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS106
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.gov.ua:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS107
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@privacypass.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS108
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@xn--b6gac.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS109
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@arena.lmsys.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS110
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@ppc.land:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS111
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.iakeys.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS112
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@edtunnel-dgp.pages.dev:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS113
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.geolocation.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS114
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.ipget.net:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS115
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.visa.com.sg:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS116
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@ns.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS117
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@abuse.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS118
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@www.d-555.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS119
vless://16eea312-d39b-4d16-a0d9-39aba3c6c8c8@ns7.cloudflare.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=randomized&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F%3Fed%3D2048#ssk-HTTPS120
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
