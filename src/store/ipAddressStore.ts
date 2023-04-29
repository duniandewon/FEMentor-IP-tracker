import { defineStore } from "pinia";
import { ref } from "vue";

interface Country {
  ip: string;
  location: string;
  timeZone: string;
  isp: string;
  lat: number;
  lng: number;
}

export const useIpAddressStore = defineStore("ip-address", () => {
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
    const regex =
      /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;

    loading.value = true;

    try {
      const res = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${
          import.meta.env.VITE_IPIFY
        }&${ip.match(regex) ? `domain=${ip}` : `ipAddress=${ip}`}`
      );

      const data = await res.json();

      if (data.code && data.code === 422) {
        error.value = "Error: Probably incorrect ip address or domain name.";

        setTimeout(() => (error.value = ""), 7000);
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
    } catch (err) {
      error.value = "Error: I don't know what went wrog. Try again!";

      setTimeout(() => (error.value = ""), 7000);
    }

    loading.value = false;
  };

  return { loading, error, country, getLocation };
});
