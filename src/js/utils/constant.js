export const UNIT_OF_PRICE = 1000;
export const MAX_PRICE = 100000;
export const LOTTO_COUNT = 6;
export const LOTTO_MIN = 1;
export const LOTTO_MAX = 45;
export const FIVE_BONUS = '5.5';

export const WINNING_NUMBER_COUNT = 7;

export const ERROR_MESSAGES = {
  INCORRECT_UNIT_OF_PRICE: `로또 구입 금액을 ${UNIT_OF_PRICE}원 단위로 입력해 주세요.`,
  EXCEED_PRICE: `로또 구입 금액은 ${MAX_PRICE}을 넘지 않아야 합니다.`,
  CANNOT_NEGATIVE_PRICE: '로또 구입 금액은 양수여야 합니다.',
  INCORRECT_TYPE_OF_PRICE: '금액은 숫자여야만 합니다.',
  NOT_UNIQUE_WINNING_NUMBER: '로또 번호에는 중복된 숫자를 입력할 수 없습니다.',
  INVALID_WINNING_NUMBER: '로또 번호는 1~45 사이의 숫자입니다.',
};

export const INITIAL_STATE = {
  purchasePrice: 0,
  ticketCount: 0,
  tickets: [],
  isNumberVisible: false,
  winningNumbers: [],
  isModalShown: false,
  winningScore: {
    3: 0,
    4: 0,
    5: 0,
    5.5: 0,
    6: 0,
  },
  PROFIT: 0,
};

const PRIZE_TABLE = {
  5: 5_000,
  4: 50_000,
  3: 1_500_000,
  2: 30_000_000,
  1: 2_000_000_000,
};

export const PRIZE_STANDARD = {
  3: PRIZE_TABLE[5],
  4: PRIZE_TABLE[4],
  5: PRIZE_TABLE[3],
  5.5: PRIZE_TABLE[2],
  6: PRIZE_TABLE[1],
};
