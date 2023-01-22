import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ComposersModel} from "../../models/composers.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output()
  changeTab = new EventEmitter()

  @Input()
  openedTab?: string

  @Input()
  partForm?: string


  annotationForm!: FormGroup

  composers: ComposersModel[] = [
    {
      id: 1,
      composer_name: 'Леонтович',
      genitive_name: 'Дмитра Леонтовича',
      composer_biography: 'ЛЕОНТОВИЧ Микола Дмитрович (1877-1921) - укр. композитор, хоровий диригент, педагог, класик укр. хорової музики, автор прибл. 200 обр. нар. пісень (зд. а кап.). Особливість обробок ЛЕОНТОВИЧа — яскрава образність, творчий розвиток народних тем (у яких, за словами композитора, укладені і гармонія, і контрапункт) різними, залежно від змісту, лаконічними засобами. Л. майстерно поєднував імітацію з характерною для укр. нар. пісні підголосністю (Над річкою бережком, Мала мати одну доньку); нерідко придумував до теми виразну контрапунктуючу мелодію, користувався куплетно-варіаційною формою, часом поєднуючи варіації наскрізним розвитком (Щедрик, Дударик); писав до пісень вступу і висновки, котрі конкретизують мистецтво. образ (Пряля, Козака несуть); використовував чергування різних груп, сольного запіву та хор. приспіву. Хор. мініатюри-поеми Леонтовича - унікальне явище в жанрі обробки нар. пісні; відрізняючись яскравою своєрідністю, благородною простотою та зручністю виконання, вони широко поширені серед професійних та самодіяльних колективів. Творч. принципи Леонтовича сприйнято багатьма укр. композиторами, які обробляли нар. пісні.',
      composer_works: 'Також створив кілька оригінальних хорів (Льодолом, Легенда, Літні звуки, Моя пісня), опера «На Русалчину Великдень» (за казкою Бориса Грінченка, 1919, незакінчена; 1975 Мирослав Скорик завершивши, відредагував та інструментував для сучасного складу симфонічного орке);',
    },
    {
      id: 2,
      composer_name: 'Лисенко',
      genitive_name: 'Миколи Лисенка',
      composer_biography: 'Мико́ла Віта́лійович Ли́сенко (10 (22) березня 1842, Гриньки — 24 жовтня (6 листопада) 1912, Київ) — український композитор, піаніст, диригент, педагог, збирач пісенного фольклору, громадський діяч. До найвідоміших творів Лисенка належать музика гімнів «Молитва за Україну» та «Вічний революціонер», котрі зокрема виконував хор Кирила Стеценка під час Свята Злуки, опери «Тарас Бульба», «Наталка Полтавка» та інші. Лисенко створив численні аранжування народної музики для голосу й фортепіано, для хору та мішаного складу, а також написав значну кількість творів на слова Тараса Шевченка. У композиторській спадщині Лисенка важливе місце займають твори на тексти Тараса Шевченка. Музика до «Кобзаря», «Радуйся, ниво неполитая», «Б\'ють пороги», «Гайдамаки», «Іван Гус» тощо, що стали наріжним каменем подальшого розвитку українського академічного музичного мистецтва та утвердження його самобутності. Лисенко — автор опер «Різдвяна ніч» (1874), «Утоплена» (1885), «Наталка Полтавка» (1889), «Тарас Бульба» (1890), «Енеїда» (1910), дитячих опер «Коза-дереза» (1880), «Пан Коцький» (1891), «Зима і Весна» (1892), оперети «Чорноморці», які стали основою українського національного оперного мистецтва. Попри політику царського уряду, спрямовану на знищення української мовної самосвідомості, що простягалася й на музичну сферу (зокрема Емський указ 1876 року забороняв також і друкування українською мовою текстів до нот), Микола Лисенко займав однозначну й непохитну позицію щодо статусу українського слова в музичній творчості[14]. Доказом принципового ставлення митця до українських текстів є те, що в своїх численних хорах і солоспівах, написаних на слова різних поетів, він звертався переважно до українських авторів (Іван Франко, Леся Українка, Олександр Олесь, Олександр Кониський тощо), а коли брав за основу вірші інших — наприклад, Г. Гейне чи А. Міцкевича, то завжди в перекладах, здійснених Михайлом Старицьким, Лесею Українкою, Максимом Славинським, Людмилою Старицькою-Черняхівською й іншими. Показово, що в багатій вокальній спадщині Миколи Лисенка є лише один романс «рос. Признание» на російський текст С. Надсона. Однак вже інший солоспів на вірші цього вельми популярного серед музикантів російського поета — «У сні мені марилось небо» — перекладений Хоча Лисенко був світським композитором, він усе ж написав декілька творів на духовну тематику: «Камо пойду от лиця Твоєго», «Херувимська» та молитву «Боже великий, єдиний» (слова О. Кониського), а також здійснив обробки трьох побожних пісень — «Пречиста Діво, мати Руського краю», «Хресним древом», «Діва днесь пресущественного раждаєт». Отримавши фахову освіту як піаніст, Лисенко став автором ряду фортепіанних творів великих та малих форм — це «Українські рапсодії» (gis moll, a moll), «Героїчне скерцо» op. 25, «Епічний фрагмент» op. 20, «Українська сюїта». Фортепіанні мініатюри М. Лисенко об\'єднував у невеликі цикли — «Альбом літа 1900» op. 37, «Альбом особистий» op. 40 тощо. З епічних творів, за доби самостійності, найбільшу популярність отримав його «Запорозький марш»: спочатку в обробці НАОНІ Віктора Гуцала, згодом, на ювілейну 25-ту річницю, був презентований як зустрічний марш ЗСУ на параді до дня Незалежності',
      composer_works: 'Миколу Лисенка заслужено вважають засновником української національної музики. Суттєву роль у цьому відіграла як його композиторська, так і етнографічна діяльність Етнографічна спадщина Лисенка — запис весільного обряду (з текстом і музикою) у Переяславському повіті, запис дум і пісень кобзаря О. Вересая, розвідки «рос. Характеристика музыкальных особенностей малорусских дум и песен, исполняемых кобзарем Остапом Вересаем» (1874 рік), «Про торбан і музику пісень Відорта» (1892 рік), «Народні музичні струменти на Вкраїні» (1894 рік).',
    }

  ]


  foundIndex: number =  this.composers.map(el => el.composer_name).findIndex((el)=> el === 'Леонтович')

  constructor(private formBuilder: FormBuilder) {
    this.annotationForm = formBuilder.group({
        title: new FormGroup({
          composed: new FormControl(null),
          accompaniment: new FormControl(null),
          composer_name: new FormControl(null),
          piece_name: new FormControl(null),
          piece_part: new FormControl(null),
          wholeComposition: new FormControl(null),
          course: new FormControl(null),
          fullName: new FormControl(null),
          man: new FormControl(null),
          type: new FormControl(null),
        }),
        historical: new FormGroup({
          text_author: new FormControl(null),
          text_content: new FormControl(null),
          genre: new FormControl(null),
        }),
        theory: new FormGroup({
          formWhole: new FormControl(null),
          form: new FormControl(null),
          formArr: new FormArray([
            this.formBuilder.group({
              'from' : new FormControl(null),
              'to': new FormControl(null)
            })
            ]
          ),
          facture : new FormControl(null),
          factureWhole: new FormControl(null),
          factureArr: new FormArray([
              this.formBuilder.group({
                'from' : new FormControl(null),
                'to': new FormControl(null)
              })
            ]
          ),
          size : new FormArray([
              this.formBuilder.group({
                'numerator' : new FormControl(null),
                'denominator': new FormControl(null)
              })
            ]
          ),
          sizeWhole: new FormControl(null),
          sizeArr: new FormArray([
              this.formBuilder.group({
                'from' : new FormControl(null),
                'to': new FormControl(null)
              })
            ]
          ),
          tempos: new FormControl(null),
          temposWhole: new FormControl(null),
          temposArr: new FormArray([
              this.formBuilder.group({
                'from' : new FormControl(null),
                'to': new FormControl(null)
              })
            ]
          ),
          ensemble: new FormControl(null),
          ensembleWhole: new FormControl(null),
          ensembleArr: new FormArray([
              this.formBuilder.group({
                'from' : new FormControl(null),
                'to': new FormControl(null)
              })
            ]
          ),
          fret : new FormControl(null),
          fretWhole: new FormControl(null),
          fretArr: new FormArray([
              this.formBuilder.group({
                'from' : new FormControl(null),
                'to': new FormControl(null)
              })
            ]
          ),
          scale: new FormControl(null),
          scaleWhole: new FormControl(null),
          scaleArr: new FormArray([
              this.formBuilder.group({
                'from' : new FormControl(null),
                'to': new FormControl(null)
              })
            ]
          ),
        }),
        vocal:new FormGroup({
          kind: new FormControl(null),
          type: new FormControl(null),
          soprano : new FormControl(null),
          alt: new FormControl(null),
          tenore : new FormControl(null),
          bass: new FormControl(null),
          breath: new FormControl(null),
          tessiture: new FormControl(null),
          tessitureArr: new FormArray([
              this.formBuilder.group({
                'from' : new FormControl(null),
                'to': new FormControl(null)
              })
            ]
          ),
          articulation: new FormControl(null),
          articulationArr: new FormArray([
              this.formBuilder.group({
                'from' : new FormControl(null),
                'to': new FormControl(null)
              })
            ]
          ),
        }),
        performance: new FormGroup({
          literatureText: new FormControl(null),
          gesture: new FormControl(null),
          gestureArr: new FormArray([
              this.formBuilder.group({
                'from' : new FormControl(null),
                'to': new FormControl(null)
              })
            ]
          ),
          dynamics: new FormControl(null),
          dynamicsArr: new FormArray([
              this.formBuilder.group({
                'from' : new FormControl(null),
                'to': new FormControl(null)
              })
            ]
          ),
          culmination: new FormControl(null),
          culminationArr: new FormArray([
              this.formBuilder.group({
                'from' : new FormControl(null),
                'to': new FormControl(null)
              })
            ]
          ),
        }),
        difficulties: new FormGroup({
          vocal: new FormControl(null),
          vocalArr: new FormArray([
              this.formBuilder.group({
                'difficulty' : new FormControl(null),
              })
            ]
          ),
          intonation: new FormControl(null),
          intonationArr: new FormArray([
              this.formBuilder.group({
                'difficulty' : new FormControl(null),
              })
            ]
          ),
          director: new FormControl(null),
          directorArr: new FormArray([
              this.formBuilder.group({
                'difficulty' : new FormControl(null),
              })
            ]
          ),
          ensemble: new FormControl(null),
          ensembleArr: new FormArray([
              this.formBuilder.group({
                'difficulty' : new FormControl(null),
              })
            ]
          ),
          scale: new FormControl(null),
          scaleArr: new FormArray([
              this.formBuilder.group({
                'difficulty' : new FormControl(null),
              })
            ]
          ),
          others: new FormControl(null),
          othersArr: new FormArray([
              this.formBuilder.group({
                'difficulty' : new FormControl(null),
              })
            ]
          ),
        })
    }

    )



  }

  ngOnInit(): void {

  }




  onSub(){
    console.log(this.annotationForm.value)
  }

  log(){
  }



  onTabChange(text: string){
    this.partForm = text
    this.onTChange(this.partForm)
  }

  onTChange(text: string | undefined){
    this.changeTab.emit(text)
  }

}
