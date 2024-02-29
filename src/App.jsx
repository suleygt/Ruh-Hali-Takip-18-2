import { useState } from 'react'
import diaryData from './diaryData'
import DiaryCard from './components/DiaryCard'
import Menu from './components/Menu'
import './styles.css'
import { format } from 'path'
export default function App() {
  const formatDate = (day) => {
    return `${day} Nisan`;
  };

  return (
    <div>
      <Menu skip={false} />
      <main className='main-container'>
        <div className='sub-header'>
          <h3>Nisan Raporu</h3>
        </div>

        {diaryData.map((dayData, index) => (
          <DiaryCard
            key={index}
            date={formatDate(dayData.date)}
            rating={dayData.rating}
            emotions={dayData.emotions}
            activities={dayData.activities}
            note={dayData.note}
          />
        )) }
      </main>
    </div>
  );
}
 
       //   key='bu geçici bir anahtar'
      //    date='1 Nisan'
        //  rating={77}
    //  emotions={[ 
        //    { icon: '😊', text: ' Memnun' },
         //   { icon: '☺️', text: 'Rahat' },
         //   { icon: '🙏', text: 'Minnettar' },
        //    { icon: '️️️⚡️', text: 'Enerjik' },
       //   ]}
        //  activities={[
          //  { icon: '🏃‍♂️', text: 'Çalışıyor' },
        //    { icon: '️️️🧘‍♂️', text: 'Meditasyon' },
         //   { icon: '️✍️', text: ' Dergi' },
        //    { icon: '️📖', text: ' Kitap Okuma' },
        //    { icon: '️👪', text: 'Aile Zamanı' },
      //    ]}
      //    note={`Çok heyecan verici bir şey olmadı ama bugün oldukça güzel bir gündü. "Kendime ayırdığım zaman" ile aileme ayırdığım zaman arasında güzel bir denge kurdum ve yatağa girdiğimde kendimi çok rahatlamış ve memnun hissettim.`}
      //  />

    //    <DiaryCard
    //      key='bu geçici bir anahtar'
      //    date='2 Nisan '
      //    rating={96}
      //    emotions={[
       //     { icon: '😇', text: 'Gururlu' },
       //     { icon: '🥰', text: ' Takdir Edildi' },
       //     { icon: '😃', text: 'Neşeli' },
          //  { icon: '️🥳', text: ' Kutlamalar' },
        //  ]}
         // activities={[
         //   { icon: '🏆', text: 'Kişisel Zaferi' },
     //       { icon: '️️️💪', text: 'Kişisel Gelişim' },
         //   { icon: '️🍛', text: 'İyi Yemek' },
         //   { icon: '️🛌', text: ' Güzel Uyku' },
          //  { icon: '️👪', text: 'Aile Zamanı' },
       //   ]}
      //    note={`Son üç aydır üzerinde çalıştığım büyük iş projemi nihayet bitirdim ve ekibimin bir üyesi olarak kendimi geliştirdiğimi hissediyorum.`}
     //   />
   //   </main>
  //  </div>
 // )
//}
