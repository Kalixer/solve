export const wordBolden = (phrase, target) => {
    const t_length = target.length // 5
    
    const wordContainer = phrase.split(' ').filter(word => word.includes(target)) // 'resolve' |
    
    // Es un desastre pero es para sacar las primeras letras antes de la palabra objetivo ('target')
    const wordBoldenBegin = String(wordContainer).split('').splice(0, String(wordContainer).split('').findIndex(item => item === target[0])).join('')

    const wordBoldenFinish = String(String(wordContainer).split('').slice(wordBoldenBegin.length + t_length, String(wordContainer).split('').length))

    const phrase_pt1 = phrase.split(' ').slice(0, phrase.split(' ').findIndex(item => item === String(wordContainer)))
    const phrase_pt2 = phrase.split(' ').slice(phrase_pt1.length + 1, phrase.split(' ').length)

    const phrase_pt1_final = phrase_pt1.join(' ')
    const phrase_pt2_final = phrase_pt2.join(' ')

    return (
        <>
            {phrase_pt1_final + ' ' + wordBoldenBegin}<strong>{target}</strong>{wordBoldenFinish + ' ' + phrase_pt2_final}
        </>
    )  
}