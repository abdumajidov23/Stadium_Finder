// import { Ctx, On, Start, Update } from 'nestjs-telegraf'
// import { Context } from 'vm'

// @Update()
// export class BotUpdate {
   
//     @Start()
//     async onStart(@Ctx() ctx: Context) {
//         await ctx.reply('Привет, я бот для проверки стадионов!')
//     }

//     @On('text')
//     async onText(@Ctx() ctx: Context) {
//         if ('text' in ctx.message) {
//             if (ctx.message.text == 'salom') {
//                 await ctx.replyWithHTML("<b> hello </b>")   
//             } else {
//                 await ctx.replyWithHTML(ctx.message.text)
//             }
//         }
//     }

//     @On("photo")
//     async onPhoto(@Ctx() ctx: Context) {
//         if ('photo' in ctx.message) {
//             // console.log('photo: ',ctx)
//             console.log(ctx.message.photo)

//             // Corrected method name
//             await ctx.replyWithPhoto(String(ctx.message.photo[ctx.message.photo.length - 1].file_id))
//         }
//     }

//     @On('video')
//     async onVideo(@Ctx() ctx: Context) {
//         if ('video' in ctx.message) {
//             // console.log('video: ',ctx)
//             console.log(ctx.message.video)
    
//             await ctx.reply(String(ctx.message.video.file_name))
//         }
//     }
    

//     @On('sticker')
//     async onStiker(@Ctx() ctx: Context) {
//         if ('sticker' in ctx.message) {
//             // console.log('video: ',ctx)
//             console.log(ctx.message.sticker )
    
//             await ctx.reply("👋")
//         }
    
//     }


//     @On('animation')
//     async onAnimation(@Ctx() ctx: Context) {
//         if('animation' in ctx.message) {
//             // console.log('video: ',ctx)
//             console.log(ctx.message.animation)
//             // await ctx.reply("���")
//             await ctx.reply(String(ctx.message.animation.duration))

//         }
//     }

//     @On('contact')
//     async onContent(@Ctx() ctx: Context) {
//         if('contact' in ctx.message) {
//             console.log(ctx.message.contact)

//             await ctx.reply(ctx.message.contact.phone_number)
//             await ctx.reply(ctx.message.contact.first_name)
//             await ctx.reply(ctx.message.contact.user_id)

//         }   
//     }

//     @On('location')
//     async onLocation(@Ctx() ctx: Context) {
//         if('location' in ctx.message) {
//             console.log('location: ',ctx)
//             console.log(ctx.message.location)
        
//             await ctx.reply(String(ctx.message.location.latitude))
//             await ctx.reply(String(ctx.message.location.longitude))
//             await ctx.replyWithLocation(ctx.message.location.latitude, ctx.message.location.longitude)
            
        
//         }
//     }

//     @On('voice')
//     async onVoice(@Ctx() ctx: Context) {
//         if('voice' in ctx.message) {
//             console.log('voice: ',ctx)
//             console.log(ctx.message.voice)

//             await ctx.replyWithVoice(String(ctx.message.voice.file_id))
//         }
//     }

//     @On('poll')
//     async onPoll(@Ctx() ctx: Context) {
//         if('poll' in ctx.message) {
//             console.log('poll: ',ctx)
//             console.log(ctx.message.poll)

//             await ctx.replyWithPoll(ctx.message.poll.question, ctx.message.poll.options)
//         }
//     }

//     @On('document')
//     async onDocument(@Ctx() ctx: Context) {
//         if('document' in ctx.message) {
//             console.log('document: ',ctx)
//             console.log(ctx.message.document)

//             await ctx.replyWithDocument(String(ctx.message.document.file_id))
//         }
//     }

//     @On('message')
//     async onMessage(@Ctx() ctx: Context) {
//         console.log('message: ',ctx)
//         console.log('message: ', ctx)
//         console.log(ctx.message)
//         console.log(ctx.botInfo)
//         console.log(ctx.chat.id)
//         console.log(ctx.from.id)
//         console.log(ctx.from.username)
//         console.log(ctx.from.photo)
//     }
// }


// import { Ctx, On, Start, Update } from 'nestjs-telegraf';
// import { Context } from 'vm';
// import * as fs from 'fs';
// import fetch from 'node-fetch';
// import ndown from 'nayan-media-downloader'; // ndown-ni to'g'ri o'rnating

// @Update()
// export class BotUpdate {
   
//     @Start()
//     async onStart(@Ctx() ctx: Context) {
//         await ctx.reply('Привет, я бот для проверки стадионов!');
//     }

//     @On('text')
//     async onText(@Ctx() ctx: Context) {
//         if ('text' in ctx.message) {
//             const chatId = ctx.chat.id;
//             // const msg = ctx.message;

//             // Instagram linkini tekshirish
//             if (ctx.message.text.startsWith("https://www.instagram.com/")) {
//         //         await ctx.reply('Yuklanmoqda...');
//         //         await ctx.reply('⌛️');

//         //         try {
//         //             const videoUrl = await ndown(ctx.message.text);
//         //             console.log("Video URL:", videoUrl);

//         //             if (!videoUrl.data || !videoUrl.data[0] || !videoUrl.data[0].url) {
//         //                 throw new Error("Video URL ma'lumotlari to'g'ri emas yoki bo'sh");
//         //             }

//         //             const videoName = `${videoUrl.data[0].title}_instagram.mp4`;
//         //             const file = fs.createWriteStream(videoName);
//         //             const response = await fetch(videoUrl.data[0].url);

//         //             console.log("Fetch javobi:", response);

//         //             if (!response.ok) throw new Error(`HTTP xatoligi! Status: ${response.status}`);

//         //             response.body.pipe(file);

//         //             file.on('finish', async () => {
//         //                 console.log('Video fayl saqlandi:', videoName);
//         //                 try {
//         //                     await ctx.replyWithVideo({ source: videoName });
//         //                     console.log('Video yuborildi:', videoName);
//         //                     fs.unlinkSync(videoName); // Faylni o'chirish
//         //                 } catch (err) {
//         //                     console.error('Video yuborishda xato:', err);
//         //                 }
//         //             });

//         //             file.on('error', (err) => {
//         //                 console.error('Faylga yozishda xato:', err);
//         //             });
//         //         } catch (error) {
//         //             console.error('Xatolik:', error);
//         //             await ctx.reply("Video yuklashda xatolik yuz berdi.");
//         //         }
//         //     } else {
//         //         // Boshqa matnlar uchun
//         //         await ctx.replyWithHTML(ctx.message.text);
//             }
//         }
//     }

//     // Qo'shimcha metodlar (foto, video va boshqalar) avvalgidek qoladi
//     @On("photo")
//     async onPhoto(@Ctx() ctx: Context) {
//         if ('photo' in ctx.message) {
//             console.log(ctx.message.photo);
//             await ctx.replyWithPhoto(String(ctx.message.photo[ctx.message.photo.length - 1].file_id));
//         }
//     }

//     @On('video')
//     async onVideo(@Ctx() ctx: Context) {
//         if ('video' in ctx.message) {
//             console.log(ctx.message.video);
//             await ctx.reply(String(ctx.message.video.file_name));
//         }
//     }

//     // Boshqa onMessage, onSticker va boshqa handlerlar avvalgidek qoldiriladi...
// }
import { Ctx, On, Start, Update } from 'nestjs-telegraf';
import { Context } from 'vm';
import fetch from 'node-fetch';
// import fetch from 'node-fetch';


// Instagram videoni yuklab olish uchun javob formati
interface InstagramDownloadResponse {
    media_url: any;
}

@Update()
export class BotUpdate {

    @Start()
    async onStart(@Ctx() ctx: Context) {
        await ctx.reply('Привет, я бот для проверки стадионов!');
    }

    @On('text')
    async onText(@Ctx() ctx: Context) {
        if ('text' in ctx.message) {
            const chatId = ctx.chat.id;
            const url = ctx.message.text;

            // Instagram linkini tekshirish
            if (url.startsWith("https://www.instagram.com/")) {
                try {
                    const mediaUrl = await this.downloadInstagramVideo(url);
                    if (mediaUrl) {
                        await ctx.replyWithVideo(mediaUrl);
                    } else {
                        await ctx.reply("Video topilmadi.");
                    }
                } catch (error) {
                    console.error(error);
                    await ctx.reply("Xatolik yuz berdi.");
                }
            } else {
                await ctx.reply("Instagram video manzili kiriting.");
            }
        }
    }

    // Instagram videoni yuklash funksiyasi
    async downloadInstagramVideo(instagramUrl: string): Promise<string | null> {
        try {
            const response = await fetch(`https://api.instagram-downloader.com/?url=${instagramUrl}`);
            const data = await response.json() as InstagramDownloadResponse; // Type assertion yordamida formatni aniq aytamiz
    
            console.log("Instagram download response:", data); // JSON javobini konsolga chiqarish
    
            if (data && data.media_url) {
                return data.media_url;
            } else {
                return null; // media_url bo'lmasa, null qaytaramiz
            }
        } catch (error) {
            console.error("Video yuklab olishda xatolik:", error);
            return null;
        }
    }
    

    @On("photo")
    async onPhoto(@Ctx() ctx: Context) {
        if ('photo' in ctx.message) {
            console.log(ctx.message.photo);
            await ctx.replyWithPhoto(String(ctx.message.photo[ctx.message.photo.length - 1].file_id));
        }
    }

    @On('video')
    async onVideo(@Ctx() ctx: Context) {
        if ('video' in ctx.message) {
            console.log(ctx.message.video);
            await ctx.reply(String(ctx.message.video.file_name));
        }
    }

    @On('sticker')
    async onSticker(@Ctx() ctx: Context) {
        if ('sticker' in ctx.message) {
            console.log(ctx.message.sticker);
            await ctx.reply("👋");
        }
    }

    @On('animation')
    async onAnimation(@Ctx() ctx: Context) {
        if ('animation' in ctx.message) {
            console.log(ctx.message.animation);
            await ctx.reply(String(ctx.message.animation.duration));
        }
    }

    @On('contact')
    async onContact(@Ctx() ctx: Context) {
        if ('contact' in ctx.message) {
            console.log(ctx.message.contact);
            await ctx.reply(ctx.message.contact.phone_number);
        }
    }

    @On('location')
    async onLocation(@Ctx() ctx: Context) {
        if ('location' in ctx.message) {
            console.log(ctx.message.location);
            await ctx.replyWithLocation(ctx.message.location.latitude, ctx.message.location.longitude);
        }
    }

    @On('voice')
    async onVoice(@Ctx() ctx: Context) {
        if ('voice' in ctx.message) {
            console.log(ctx.message.voice);
            await ctx.replyWithVoice(String(ctx.message.voice.file_id));
        }
    }

    @On('poll')
    async onPoll(@Ctx() ctx: Context) {
        if ('poll' in ctx.message) {
            console.log(ctx.message.poll);
            await ctx.replyWithPoll(ctx.message.poll.question, ctx.message.poll.options);
        }
    }

    @On('document')
    async onDocument(@Ctx() ctx: Context) {
        if ('document' in ctx.message) {
            console.log(ctx.message.document);
            await ctx.replyWithDocument(String(ctx.message.document.file_id));
        }
    }

    @On('message')
    async onMessage(@Ctx() ctx: Context) {
        console.log(ctx.message);
        console.log(ctx.chat.id);
        console.log(ctx.from.id);
    }
}
