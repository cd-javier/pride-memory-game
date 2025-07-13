# Pseudocode

## deck.js

    card deck = [{img, desc, keyword}, ... ]

## Card.jsx

    Card component
        props:
            card
            handleFlip

        handleClick(card)
            if !isFlipped
            handleFlip(card.id)

        return
            html for the card
            className isFlipped only if card.isFlipped
            onClick handleClick

## Game.jsx

    function prepareDeck(deck)
        doubled deck = deck twice, mapped to add:
            id: index
            isSelected: false
            isDiscovered: false,
            isFlipped: isSelected || isDiscovered

        return shuffled double deck

    Game component
        props:
            deck
            triggerDiscover

        [deck, setDeck] = useState(()=> prepareDeck(deck))

        let prevCard = useRef([])

        function selectCard(card)
            setDeck(deck.map(elm => if elm.id === card.id return {...elm selected:true} : elm))
            push card to prevCard


        function deselectCards()
            setDeck(deck.map(card => {...card, selected:false}))


        function discoverCard(card)
            setDeck(deck.map(elm => if elm.content === card.content return {...card discovered:true} : card))
            triggerDiscover(card.keyword)


        handleFlip(card)
            if prevCard length is >= 2
                return

            if prevCard[0] === card
                return

            selectCard(card)

            if prevCard length === 1
                return

            if prevCard[0].kw === card.kw
                discoverCard(card)
                triggerDiscovered(card.keyword)
                return

            setTimeOut 2s deselectCards

        return
            deck.map => <Card card:card, handleFlip:handleFlip />

## Legend.jsx

    component legend
        props:
        deck
        total

        return
            counter

            if deck.length === 0
                empty state
            else
                deck.map whatever

## App.jsx

    component App
        props
        deck

        const [discoveredCards, setDiscoveredCards] = useState([])

        triggerDiscovered(keyword)
            foundCard = deck.find(elm)

            setDiscoveredCards([foundCard, ...discoveredCards])


    return
        game triggerDiscovered deck
        legend discoveredCards, deck.length
