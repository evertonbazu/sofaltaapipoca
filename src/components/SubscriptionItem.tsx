
import React from "react";
import SubscriptionCard from "@/components/SubscriptionCard";

interface SubscriptionItemProps {
  title: string;
  price: string;
  paymentMethod: string;
  status: string;
  access: string;
  headerColor: string;
  priceColor: string;
  whatsappNumber: string;
  telegramUsername: string;
  icon?: string;
  addedDate?: string;
  subscriptionRefs?: React.MutableRefObject<{[key: string]: HTMLDivElement | null}>;
  isSearchResult?: boolean;
}

const SubscriptionItem: React.FC<SubscriptionItemProps> = ({
  title,
  price,
  paymentMethod,
  status,
  access,
  headerColor,
  priceColor,
  whatsappNumber,
  telegramUsername,
  icon,
  addedDate,
  subscriptionRefs,
  isSearchResult = false
}) => {
  // If the subscription needs to be referenced (for featured items), use a ref
  if (subscriptionRefs) {
    return (
      <div ref={el => subscriptionRefs.current[title] = el}>
        <SubscriptionCard
          title={title}
          price={price}
          paymentMethod={paymentMethod}
          status={status}
          access={access}
          headerColor={headerColor}
          priceColor={priceColor}
          whatsappNumber={whatsappNumber}
          telegramUsername={telegramUsername}
          icon={icon}
          addedDate={addedDate}
          isSearchResult={isSearchResult}
        />
      </div>
    );
  }
  
  // Otherwise, render without a ref
  return (
    <SubscriptionCard
      title={title}
      price={price}
      paymentMethod={paymentMethod}
      status={status}
      access={access}
      headerColor={headerColor}
      priceColor={priceColor}
      whatsappNumber={whatsappNumber}
      telegramUsername={telegramUsername}
      icon={icon}
      addedDate={addedDate}
      isSearchResult={isSearchResult}
    />
  );
};

export default SubscriptionItem;
