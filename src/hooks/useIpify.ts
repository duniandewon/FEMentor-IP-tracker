import { ref } from "vue";

interface Country {
  ip: string;
  location: string;
  timeZone: string;
  isp: string;
  lat: number;
  lng: number;
}

export const useIpify = () => {
  const loading = ref(true);
  const error = ref("");
  const country = ref<Country>({
    ip: "",
    location: "",
    timeZone: "",
    isp: "",
    lat: 0,
    lng: 0,
  });

  const getLocation = async (ip: string) => {
    loading.value = true;

    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        import.meta.env.VITE_IPIFY
      }&ipAddress=${ip}`
    );

    const data = await res.json();

    console.log(data);

    if (data.code && data.code === 422) {
      error.value = data.messages;
    } else {
      country.value = {
        ip: data.ip,
        isp: data.isp,
        location: `${data.location.region}, ${data.location.country}`,
        timeZone: `UTC ${data.location.timezone}`,
        lat: data.location.lat,
        lng: data.location.lng,
      };
    }

    loading.value = false;

  };

  return { loading, error, country, getLocation };
};
