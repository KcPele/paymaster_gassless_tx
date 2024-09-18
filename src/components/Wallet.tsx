import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { Address, Name, Identity } from "@coinbase/onchainkit/identity";
import { color } from "@coinbase/onchainkit/theme";

export function ConnectButton() {
  return (
    <div className="flex justify-end">
      <Wallet>
        <ConnectWallet>
          <Name />
        </ConnectWallet>
        <WalletDropdown>
          <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
            <Name />
            <Address className={color.foregroundMuted} />
          </Identity>
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
    </div>
  );
}
