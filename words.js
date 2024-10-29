function splitIntoSentences(text) {
    // Trim whitespace and split the text using regex for punctuation marks followed by whitespace or end of line
    const sentences = text.match(/[^.!?]*[.!?]/g);
    // Return an array of trimmed sentences, filtering out any empty ones
    return sentences ? sentences.map(sentence => sentence.trim()) : [];
}
document.addEventListener(`click`, process)

let text = "Что это? Это автомобиль. Какой этот автомобиль? Он слишком маленький и довольно плохой. Какой тот автомобиль? Тот автомобиль новый и хороший, но слишком большой. Какой этот ковер? Он большой и очень красивый. Но ковер ли это? Разве это не картина? Да, это большая и довольно красивая картина. Маленькая кошка - белая, а большая кошка - черная. Эта маленькая кошка тоже черная. Что это? Это дом. Какой он? Он большой. Он новый? Нет, он довольно старый";

let stored_words = [
  { value: "а", type: "union"},
  { value: "автомобиль", type: "noun", singular:"true", gender: "masculine", case: "nominative" },
  { value: "белая", type: "adjective", gender: "feminine", case: "nominative", degree: "none" },
  { value: "большая", type: "adjective", gender: "feminine", case: "nominative", degree: "none" },
  { value: "большой", type: "adjective", gender: "masculine", case: "nominative", degree: "none" },
  { value: "да", type: "union"},
  { value: "довольно", type: "adverb"},
  { value: "дом", type: "noun", singular:"true", gender: "masculine", case: "nominative" },
  { value: "какой", type: "pronoun", singular:"true", gender: "masculine", case: "nominative" },
  { value: "картина", type: "noun", singular:"true", gender: "feminine", case: "nominative" },
  { value: "ковер", type: "noun", singular:"true", gender: "masculine", case: "nominative" },
  { value: "кошка", type: "noun", singular:"true", gender: "feminine", case: "nominative" },
  { value: "красивая", type: "adjective", gender: "feminine", case: "nominative", degree: "none" },
  { value: "красивый", type: "adjective", gender: "masculine", case: "nominative", degree: "none" },
  { value: "ли", type: "particle"},
  { value: "маленькая", type: "adjective", gender: "feminine", case: "nominative", degree: "none" },
  { value: "маленький", type: "adjective", gender: "masculine", case: "nominative", degree: "none" },
  { value: "нет", type: "union"},
  { value: "но", type: "union"},
  { value: "новый", type: "adjective", gender: "masculine", case: "nominative", degree: "none" },
  { value: "он", type: "pronoun", singular:"true", gender: "masculine", case: "nominative" },
  { value: "очень", type: "adverb"},
  { value: "плохой", type: "adjective", gender: "masculine", case: "nominative", degree: "none" },
  { value: "слишком", type: "adverb"},
  { value: "старый", type: "adjective", gender: "masculine", case: "nominative", degree: "none" },
  { value: "тоже", type: "adverb"},
  { value: "тот", type: "pronoun", singular:"true", gender: "masculine", case: "nominative" },
  { value: "черная", type: "adjective", gender: "feminine", case: "nominative", degree: "none" },
  { value: "что", type: "pronoun", singular:"true", gender: "neutral", case: "nominative" },
  { value: "хороший", type: "adjective", gender: "masculine", case: "nominative", degree: "none" },
  { value: "эта", type: "pronoun", singular:"true", gender: "feminine", case: "nominative" },    { value: "это", type: "pronoun", singular:"true", gender: "neutral", case: "nominative" },    { value: "этот", type: "pronoun", singular:"true", gender: "masculine", case: "nominative" },  
];


let her = [
  { value: "больше", type: "adjective", gender: "male", case: "instrumental", degree: "comparative" },
  { value: "в", type: "preposition" },
  { value: "времена", type: "noun", singular:"false", gender: "neutral", case: "nominative" },
  { value: "год", type: "noun", singular:"true", gender: "male", case: "nominative" },
  { value: "году", type: "noun", singular:"true", gender: "male", case: "prepositional" },
  { value: "годовом", type: "adjective", singular:"true", gender: "male", case: "instrumental", degree: "none" },
  { value: "достигала", aspect: "imperfective", type: "verb", singular:"true", tense: "past", gender: "female"},
  { value: "есть",aspect: "imperfective",  type: "verb", singular:"true", tense: "present"},
  { value: "еще", type: "adverb"},
  { value: "закончила",aspect: "perfective",  type: "verb", singular:"true", tense: "past", gender: "female"},
  { value: "зарегистрирована",aspect: "perfective",  type: "participle", singular:"true", gender: "female"},
  { value: "здании", type: "noun", singular:"true", gender: "female", case: "prepositional" },
  { value: "и", type: "union"},
  { value: "компании", type: "noun", singular:"true", gender: "female", case: "genitive" },
  { value: "компанию", type: "noun", singular:"true", gender: "female", case: "accusative" },
  { value: "компания", type: "noun", singular:"true", gender: "female", case: "nominative" },
  { value: "лучшие", type: "adjective", singular:"false", degree: "superlative", case: "nominative"},
  { value: "миллион", type: "noun", singular:"true", gender: "male", case: "nominative" },
  { value: "миллиона", type: "noun", singular:"true", gender: "male", case: "genitive" },
  { value: "миллионов", type: "noun", singular:"false", gender: "male", case: "genitive" },
  { value: "не", type: "particle", },
  { value: "нее", type: "pronoun", singular:"true", gender: "female", case: "genitive" },
  { value: "никак", type: "adverb", },
  { value: "оборот", type: "noun", singular:"true", gender: "male", case: "nominative" },
  { value: "объясняет", aspect: "imperfective", type: "verb", singular:"true", tense: "present"},
  { value: "огромный", type: "adjective", singular:"true", gender: "male", degree: "none"},
  { value: "офисном", type: "noun", singular:"true", gender: "male", case: "prepositional" },
  { value: "отчете", type: "noun", singular:"true", gender: "male", case: "prepositional" },
  { value: "почти", type: "adverb" },
  { value: "прибыль", type: "noun", singular:"true", gender: "female", case: "nominative" },
  { value: "прошлая", type: "adjective", singular:"true", gender: "female", degree: "none", case: "nominative"},
  { value: "прошлый", type: "adjective", singular:"true", gender: "male", degree: "none", case: "nominative"},
  { value: "руководители", type: "noun", singular:"false", gender: "male", case: "nominative" },
  { value: "с", type: "preposition" },
  { value: "своем", type: "pronoun", singular:"true", gender: "male", case: "prepositional" },
  { value: "свой", type: "pronoun", singular:"true", gender: "male", case: "nominative" },
  { value: "снизился",aspect: "perfective",  type: "verb", singular:"true", tense: "past", gender: "male"},
  { value: "составил", aspect: "perfective", type: "verb", singular:"true", tense: "past", gender: "male"},
  { value: "таллинна", type: "noun", singular:"true", gender: "male", case: "genitive" },
  { value: "у", type: "preposition" },
  { value: "убытки", type: "noun", singular:"false", gender: "male", case: "nominative" },
  { value: "убытком", type: "noun", singular:"true", gender: "male", case: "instrumental" },
  { value: "убыток", type: "noun", singular:"true", gender: "male", case: "nominative" },
  { value: "уполномочили",aspect: "perfective",  type: "verb", singular:"false", tense: "past"},
  { value: "фирма", type: "noun", singular:"true", gender: "female", case: "nominative" },
  { value: "центре", type: "noun", singular:"true", gender: "male", case: "prepositional" },
  { value: "эстонская", type: "adjective", singular:"true", gender: "female", case: "nominative" },
  { value: "эстонский", type: "adjective", singular:"true", gender: "male", case: "nominative" },
  { value: "этой", type: "pronoun", singular:"true", gender: "female", case: "genitive" },
  { value: "этом", type: "pronoun", singular:"true", gender: "male", case: "prepositional" },
];

function increaseProperty(object, property)
{
  if(object.hasOwnProperty(property)) object[property] += 1;
  else object[property] = 1;
}
let statistics = Array.from({length: 10}, _=>{ return {} });

function process()
{
  let sentences = splitIntoSentences(text);
  one: for ( let s=0; s<sentences.length; s++ )
  {
    let sentence = sentences[s];
    let words = sentence.match(/[а-яa-z0-9\-]+/gi).map(e=>e.toLowerCase());
    for ( let w=0;w<words.length;w++ )
    {
      if(w == 10) break;
      let word = words[w];
      let found = 0;
      for( let sw = 0; sw < stored_words.length; sw++ )
      {
        let stored_word = stored_words[sw];
        if ( stored_word [ "value" ] == word )
        {
          increaseProperty ( statistics [ w ], "type_" + stored_word [ "type" ]);
          if ( [ "adjective", "noun", "pronoun" ].includes ( stored_word [ "type" ] ) )
          {
            increaseProperty ( statistics [ w ], "case_" + stored_word [ "case" ] );
            increaseProperty ( statistics [ w ], "gender_" + stored_word [ "gender" ] );
            if ( stored_word [ "singular" ] == "true" ) increaseProperty ( statistics [ w ], "singular_true" );
            else  increaseProperty ( statistics [ w ], "singular_false" );
            if ( stored_word [ "type" ] == "adjective" ) increaseProperty ( statistics [ w ], "degree_" + stored_word [ "degree" ] );
          }
          else if ( ["verb"].includes ( stored_word [ "type" ] ) )
          {
            increaseProperty ( statistics [ w ], "aspect_" + stored_word [ "aspect" ] );
            if ( ( stored_word [ "tense" ] == "past" ) && ( stored_word [ "singular" ] == "true" ) ) increaseProperty ( statistics [ w ], "gender_" + stored_word [ "gender" ] );
            if ( stored_word [ "singular" ] == "true" ) increaseProperty ( statistics [ w ], "singular_true" );
            else  increaseProperty ( statistics [ w ], "singular_false" );
            increaseProperty ( statistics [ w ], "tense_" + stored_word [ "tense" ] );
          }
          else if ( ["participle"].includes ( stored_word [ "type" ] ) )
          {
            increaseProperty ( statistics [ w ], "aspect_" + stored_word [ "aspect" ] );
            increaseProperty ( statistics [ w ], "gender_" + stored_word [ "gender" ] );
            if ( stored_word [ "singular" ] == "true" ) increaseProperty ( statistics [ w ], "singular_true" );
            else  increaseProperty ( statistics [ w ], "singular_false" );
          }
          found = 1;
          break;
        }
      }
      if(!found)
      {
        if ( word.match ( /[a-z]+/gi ) && ( word == word.match ( /[a-z]+/gi ) [ 0 ] ) )
        {
          increaseProperty ( statistics [ w ], "case_nominative" );
          increaseProperty ( statistics [ w ], "gender_male" );
          increaseProperty ( statistics [ w ], "singular_true" );          
          increaseProperty ( statistics [ w ], "type_noun" );          
        }
        else if ( word.match ( /\d+/gi ) && ( word == word.match ( /\d+/gi ) [ 0 ] ) )
        {
          increaseProperty ( statistics [ w ], "type_numeral" );          
        }
        else
        {
          console.log( word );
          return;
        }
      }
    }
  }
  let vtr = [];
  let vtr2 = [];
  for ( let i = 0; i < statistics.length; i++ )
  {
    let statistics_row = statistics [ i ];
    let best_aspect_name = "none";
    let best_aspect_value = -Infinity;
    let best_case_name = "none";
    let best_case_value = -Infinity;
    let best_degree_name = "none";
    let best_degree_value = -Infinity;
    let best_gender_name = "none";
    let best_gender_value = -Infinity;
    let best_singular_name = "none";
    let best_singular_value = -Infinity;
    let best_tense_name = "none";
    let best_tense_value = -Infinity;
    let best_type_name = "none";
    let best_type_value = -Infinity;
    for ( let property in statistics_row )
    {
      if ( property.startsWith ( `aspect_` ) )
      {
        if ( best_aspect_value < statistics_row [ property ] )
        {
          best_aspect_name = property.split ( `aspect_` ) [ 1 ];
          best_aspect_value = statistics_row [ property ] 
        }
      }
      if ( property.startsWith ( `case_` ) )
      {
        if ( best_case_value < statistics_row [ property ] )
        {
          best_case_name = property.split ( `case_` ) [ 1 ];
          best_case_value = statistics_row [ property ] 
        }
      }
      if ( property.startsWith ( `degree_` ) )
      {
        if ( best_degree_value < statistics_row [ property ] )
        {
          best_degree_name = property.split ( `degree_` ) [ 1 ];
          best_degree_value = statistics_row [ property ] 
        }
      }
      if ( property.startsWith ( `gender_` ) )
      {
        if ( best_gender_value < statistics_row [ property ] )
        {
          best_gender_name = property.split ( `gender_` ) [ 1 ];
          best_gender_value = statistics_row [ property ] 
        }
      }
      if ( property.startsWith ( `singular_` ) )
      {
        if ( best_singular_value < statistics_row [ property ] )
        {
          best_singular_name = property.split ( `singular_` ) [ 1 ];
          best_singular_value = statistics_row [ property ] 
        }
      }
      if ( property.startsWith ( `tense_` ) )
      {
        if ( best_tense_value < statistics_row [ property ] )
        {
          best_tense_name = property.split ( `tense_` ) [ 1 ];
          best_tense_value = statistics_row [ property ] 
        }
      }
      if ( property.startsWith ( `type_` ) )
      {
        if ( best_type_value < statistics_row [ property ] )
        {
          best_type_name = property.split ( `type_` ) [ 1 ];
          best_type_value = statistics_row [ property ] 
        }
      }
    }
    if ( [ "adjective" ].includes ( best_type_name ) )
    {
      vtr.push ( `${i+1}) ${best_case_name} ${best_degree_name} ${best_gender_name} ${best_singular_name} ${best_type_name}` );
      let chosen_word;
      while ( true )
      {
        chosen_word = stored_words [ Math.floor ( Math.random () * stored_words.length ) ];
        if( chosen_word [ "case" ] != best_case_name ) continue;
        if( chosen_word [ "degree" ] != best_degree_name ) continue;
        if( chosen_word [ "gender" ] != best_gender_name ) continue;
        if( chosen_word [ "singular" ] != best_singular_name ) continue;
        if( chosen_word [ "type" ] != best_type_name ) continue;
        break;
      }
      vtr2.push ( chosen_word [ "value" ] );
    }
    else if ( [ "noun", "pronoun" ].includes ( best_type_name ) )
    {
      vtr.push ( `${i+1}) ${best_case_name} ${best_gender_name} ${best_singular_name} ${best_type_name}` );
      let chosen_word;
      while ( true )
      {
        chosen_word = stored_words [ Math.floor ( Math.random () * stored_words.length ) ];
        if( chosen_word [ "case" ] != best_case_name ) continue;
        if( chosen_word [ "gender" ] != best_gender_name ) continue;
        if( chosen_word [ "singular" ] != best_singular_name ) continue;
        if( chosen_word [ "type" ] != best_type_name ) continue;
        break;
      }
      vtr2.push ( chosen_word [ "value" ] );
    }
    else if ( [ "verb" ].includes ( best_type_name ) )
    {
      if ( ( best_tense_name == "past" ) && ( best_singular_name == "true" ) ){
        vtr.push ( `${i+1}) ${best_aspect_name} ${best_gender_name} ${best_singular_name} ${best_tense_name} ${best_type_name}` );
      }
      else {
        vtr.push ( `${i+1}) ${best_aspect_name} ${best_singular_name} ${best_tense_name} ${best_type_name}` );
      }
      let chosen_word;
      while ( true )
      {
        chosen_word = stored_words [ Math.floor ( Math.random () * stored_words.length ) ];
        if( chosen_word [ "aspect" ] != best_aspect_name ) continue;
        if ( ( best_tense_name == "past" ) && ( best_singular_name == "true" ) )
        { 
          if( chosen_word [ "gender" ] != best_gender_name ) continue;
        }
        if( chosen_word [ "singular" ] != best_singular_name ) continue;
        if( chosen_word [ "tense" ] != best_tense_name ) continue;
        if( chosen_word [ "type" ] != best_type_name ) continue;
        break;
      }
      vtr2.push ( chosen_word [ "value" ] );
    }
    else if ( [ "participle" ].includes ( best_type_name ) )
    {
      vtr.push ( `${i+1}) ${best_aspect_name} ${best_gender_name} ${best_singular_name} ${best_type_name}` );
      let chosen_word;
      while ( true )
      {
        chosen_word = stored_words [ Math.floor ( Math.random () * stored_words.length ) ];
        if( chosen_word [ "aspect" ] != best_aspect_name ) continue;
        if( chosen_word [ "gender" ] != best_gender_name ) continue;
        if( chosen_word [ "singular" ] != best_singular_name ) continue;
        if( chosen_word [ "type" ] != best_type_name ) continue;
        break;
      }
      vtr2.push ( chosen_word [ "value" ] );
    }
    else
    {
      vtr.push ( `${i+1}) ${best_type_name}` );
      let chosen_word;
      while ( true )
      {
        chosen_word = stored_words [ Math.floor ( Math.random () * stored_words.length ) ];
        if( chosen_word [ "type" ] != best_type_name ) continue;
        break;
      }
      vtr2.push ( chosen_word [ "value" ] );
    }
  }
  console.log ( vtr.join ( ` ` ) );
  console.log ( vtr2.join ( ` ` ) );
}
process();