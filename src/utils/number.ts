class NumberUtils {
  static maskMoneyBRL(money: string): string {
    money = NumberUtils.unmaskMoneyBRL(money)?.toString() || '0';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(Number(money));
  }

  static unmaskMoneyBRL(value: string | null | undefined): string {
    if (!value || typeof value !== 'string') return null;
    const numericValue = value.replace(/\D/g, '');
    if (numericValue.length < 2) return null;
    return (Number(numericValue) / 100).toFixed(2);
  }

  static maskCep(cep: string): string {
    return cep.replace(/^(\d{5})(\d{3}).*/, '$1-$2');
  }

  static maskCpf(cpf: string): string {
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
  }

  static formatNumber(value: number): string {
    return new Intl.NumberFormat('pt-BR').format(value);
  }
}

export default NumberUtils;
