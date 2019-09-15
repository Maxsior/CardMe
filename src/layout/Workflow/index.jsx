import React from 'react';

import './index.sass';

import Card from '../../components/Card';
import FAB from '../../components/FAB';
import Copyright from '../../components/Copyright';
import Modal from '../../components/Modal';

import fi1 from '../../assets/demo/fam1.jpg';
import fi2 from '../../assets/demo/fam2.jpg';

class Workflow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          image: fi1,
          date: new Date(2018, 10, 1),
          text: 'My Autumn Family Photo!',
        },
        {
          image: fi2,
          date: new Date(2018, 6, 3),
          text: 'Little Ann with parents',
        },
      ],
      editIndex: -1,
    };

    this.addCard = this.addCard.bind(this);
    this.changeCard = this.changeCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  addCard({ date, label, image }) {
    const { cards } = this.state;
    cards.push({ date: new Date(date), text: label, image });
    this.setState({ cards });
  }

  changeCard({ date, label, image }) {
    // this.deleteCard();
    // this.addCard(obj);

    // FIXME cards don't update, but data in modal is right
    let { cards } = this.state;
    cards = cards.map(
      (card) => (
        (
          card.date.toISOString().substr(0, 10) === date
          && card.text === label
          && image.indexOf(card.image) > -1
        ) ? { date: new Date(date), image, text: label } : card
      ),
    );
    this.setState({ cards, editIndex: -1 });
  }

  deleteCard({ date, label, image }) {
    let { cards } = this.state;
    cards = cards.filter(
      (card) => !(card.date.toISOString().substr(0, 10) === date
                  && card.text === label
                  && image.indexOf(card.image) > -1),
    );
    this.setState({ cards, editIndex: -1 });
  }

  render() {
    const { cards, editIndex } = this.state;

    return (
      <div id="workflow">
        <FAB icon="add" action={() => document.getElementById('modal_add').classList.add('open')} />

        {/* <FAB icon="person">
          <FAB.Action icon="class" />
          <FAB.Action icon="dashboard" />
        </FAB> */}

        { cards.map(({ image, date, text }, i) => (
          <Card
            key={image + date + text}
            img={image}
            date={date}
            text={text}
            onEdit={() => {
              this.setState({ editIndex: i });
              const modal = document.getElementById('modal_edit');
              if (modal) modal.classList.add('open');
            }}
          />
        )) }

        {
          editIndex > -1 && (
            <Modal
              id="modal_edit"
              open
              okAction={this.changeCard}
              cancelAction={this.deleteCard}
              date={cards[editIndex].date}
              text={cards[editIndex].text}
              image={cards[editIndex].image}
            />
          )
        }

        <Modal id="modal_add" okAction={this.addCard} cancelAction={() => 1} />

        <Copyright />
      </div>
    );
  }
}

export default Workflow;
