import Title from "../../main/Title";

const Biography = () => {
  return (
    <section className="p-8 my-12">
      <Title fa="بیوگرافی" en="Biography"/>
      <div className="flex justify-between md:flex-row flex-col items-center pt-12">
        <div className="md:w-[45%] w-full text-[#ccc] ">
          <h1 className="text-[45px] text-one">علی عبدالمالکی</h1>
          <p className="leading-8">
            (زادهٔ ۲۶ مرداد ۱۳۶۳) خواننده، ترانه‌سرا، آهنگساز و تنظیم‌کنندهٔ
            موسیقی پاپ اهل ایران است.
          </p>
          <p className="leading-8">
            علی عبدالمالکی متولد روستای دارانی سفلی است ولی بزرگ شده تهران محله
            مسعودیه است . وی در بهمن ۱۳۸۶ آلبوم خدانشناس، با آهنگ‌سازی و تنظیم
            دی‌جی سروش اس جی ترک که شامل ۸ آهنگ بود را وارد بازار کرد. پس از چند
            ماه در اردیبهشت ۱۳۸۷ دومین آلبوم خود به نام نامسلمون را دوباره با
            آهنگ‌سازی و تنظیم دی‌جی سروش اس جی ترک و با همکاری ایمان ظهراب
            روانهٔ بازار کرد. او نخستین کنسرت خود را در اواخر سال ۱۳۹۰ در
            نمایشگاه بین‌المللی تهران برگزار کرد. در سال ۱۳۹۴ آلبومی با عنوان
            مخاطب خاص به‌طور رسمی و با مجوز رسمی از وزارت ارشاد توسط شرکت پخش
            دنیای هنر منتشر شد.
          </p>
        </div>
        <div className="md:w-[45%] w-full">
          <img
            src="/src/img/two.png"
            className=" drop-shadow-2xl"
            alt="Ali Abdolmaleki"
          />
        </div>
      </div>
    </section>
  );
};

export default Biography;
