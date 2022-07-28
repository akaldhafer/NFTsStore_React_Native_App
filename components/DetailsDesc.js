import { View, Text } from 'react-native'
import React, {useState} from 'react'

import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0,150));
  const [readMore, setReadMore]= useState(false);

  return (
    <>
     <View style={{
      width: '100%', 
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
     }}>
      <NFTTitle
        title={data.name}
        subTitle={data.creator}
        titleSize={SIZES.extraLarge}
        subTitleSize= {SIZES.font}
      />
      <EthPrice
       price={data.price}
      />
    </View>
    <View style={{
      marginVertical: SIZES.extraLarge *1.5
    }}>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.font,
        color: COLORS.primary,
      }}>Description</Text>
      <View style={{marginTop: SIZES.base}}>
         <Text style={{
           fontFamily: FONTS.regular,
           fontSize: SIZES.small,
           color: COLORS.secondary,
           textAlign: 'justify',
           lineHeight: SIZES.large
         }}>
          {text}
          {!readMore && '...'}
         </Text>
         <Text style={{
           fontFamily: FONTS.semiBold,
           fontSize: SIZES.small,
           color: COLORS.primary,
         }}
           onPress={() => {
            if(!readMore){
              setText(data.description);
              setReadMore(true);
            } else {
              setText(data.description.slice(0,150));
              setReadMore(false);
            }
           }}
         >
             {readMore ? 'Show Less' : 'Read More'}
         </Text>
      </View>
    </View>
    </>
   
  )
}

export default DetailsDesc