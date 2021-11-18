import { gql } from "@apollo/client";

const SubscriptionPassengers = gql`
  subscription MySubscription {
    anggota {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

export default SubscriptionPassengers;
