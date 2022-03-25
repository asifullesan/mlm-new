import React from 'react';
import './MLM.css'
import mlm from '../../../Image/Banner/mlm.jpg'



const componentName = () => {
    return (
        <div>
            <div className='mlm container'>
                <div className='mlm-flex'>
                    <div className='mlm-info'>
                        <h2 className='mlm-h2'>এমএলএম কি? </h2>
                        <p className='mlm-p'>মাল্টি-লেভেল মার্কেটিং (এমএলএম) হল একটি বিপণন কৌশল যেখানে সেলস ফোর্সকে শুধুমাত্র তাদের ব্যক্তিগতভাবে তৈরি করা বিক্রয়ের জন্যই ক্ষতিপূরণ দেওয়া হয় না, তবে তারা নিয়োগ করা অন্যান্য বিক্রয়কর্মীর বিক্রয়ের জন্যও। এই নিয়োগকৃত বিক্রয় বাহিনীকে অংশগ্রহণকারীর "ডাউনলাইন" হিসাবে উল্লেখ করা হয় এবং এটি একাধিক স্তরের ক্ষতিপূরণ প্রদান করতে পারে। MLM-এর অন্যান্য শর্তাবলীর মধ্যে রয়েছে পিরামিড বিক্রি, নেটওয়ার্ক মার্কেটিং এবং রেফারেল মার্কেটিং।</p>
                    </div>
                    <div className='mlm-i'>
                        <img className='mlm-img' src={mlm} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default componentName;