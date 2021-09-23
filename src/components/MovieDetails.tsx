import React from 'react'
import { Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    movieFull: MovieFull;
    cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star-outline" color="grey" size={16} />

                    <Text>{movieFull.vote_average}</Text>

                    <Text style={{ marginLeft: 5 }}>
                        {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>

                <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold' }}>Historia</Text>

                <Text>{movieFull.overview}</Text>

                <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold' }}>Presupuesto</Text>

                <Text style={{ fontSize: 18 }}>{currencyFormatter.format(movieFull.budget, { code: 'USD' })}</Text>

                <View style={{ marginTop: 10, marginBottom: 100 }}>
                    <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold' }}>Actores</Text>

                    <FlatList
                        data={cast}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <CastItem actor={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{marginTop: 10, height: 70}}
                    />
                </View>


            </View>
        </>
    )
}
